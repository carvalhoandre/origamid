import { CoreProvider } from "../../../core/utils/abstract.ts";
import { AuthQuery } from "../query.ts";
import type { SessionCreateParams, SessionValidateResult } from "../types.d.ts";
import { randomBytesAsync, sha256Hash } from "../utils/utils.ts";

const ttlSec = 1000 * 60 * 60 * 24 * 15;
const ttlSecFiveDays = 1000 * 60 * 60 * 24 * 5;

export const COOKIE_SID_KEY = "__Secure-sid";

function sidCookie(sid: string, expires: number) {
  return `${COOKIE_SID_KEY}=${sid}; Path=/; Max-Age=${expires}; HttpOnly; Secure; SameSite=Lax`;
}

export class SessionService extends CoreProvider {
  query = new AuthQuery(this.db);

  async create({ userId, ip, ua }: SessionCreateParams) {
    const expires_ms = Date.now() + ttlSec;
    const sid = (await randomBytesAsync(32)).toString("base64url");
    const sid_hash = sha256Hash(sid);

    this.query.insertSession({
      user_id: userId as number,
      sid_hash,
      expires_ms,
      ip,
      ua,
    });

    const cookie = sidCookie(sid, ttlSec);
    return { cookie };
  }

  validate(sid: string): SessionValidateResult {
    const now = Date.now();
    const sid_hash = sha256Hash(sid);
    const session = this.query.selectSession(sid_hash);
    const revoked = { valid: false, cookie: sidCookie("", 0) };

    if (!session || session.revoked === 1) {
      return revoked;
    }

    let expires_ms = session.expires_ms;

    if (now >= expires_ms) {
      expires_ms = now + ttlSec;
      this.query.revokeSession(sid_hash);

      return revoked;
    }

    if (now >= expires_ms - ttlSecFiveDays) {
      const expires_ms_update = now + ttlSec;

      this.query.updateSessionExpires(sid_hash, expires_ms_update);

      expires_ms = expires_ms_update;
    }

    const user = this.query.selectUserRole(session.user_id);

    if (!user) {
      this.query.revokeSession(sid_hash);
      return revoked;
    }

    return {
      valid: true,
      cookie: sidCookie(sid, Math.floor((expires_ms - now) / 1000)),
      session: { user_id: session.user_id, role: user.role, expires_ms },
    };
  }

  invalidate(sid: string | undefined) {
    const cookie = sidCookie("", 0);

    try {
      if (sid) {
        const sid_hash = sha256Hash(sid);

        this.query.revokeSession(sid_hash);
      }
    } catch (error) {
      console.error("Error invalidating session:", error);
    }

    return { cookie };
  }

  invalidateAll(user_id: number) {
    this.query.revokeSessions(user_id);
  }

  async resetToken({ userId, ip, ua }: SessionCreateParams) {
    const token = (await randomBytesAsync(32)).toString("base64url");
    const token_hash = sha256Hash(token);
    const expires_ms = Date.now() + 1000 * 60 * 30;

    this.query.insertReset({
      token_hash,
      expires_ms,
      user_id: userId,
      ip,
      ua,
    });

    return { token };
  }

  validateToken(token: string) {
    const now = Date.now();
    const token_hash = sha256Hash(token);
    const reset = this.query.selectReset(token_hash);

    if (!reset || reset.expires_ms < now) {
      return null;
    }

    this.query.revokeSessions(reset.user_id);
    this.query.deleteReset(reset.user_id);

    return { user_id: reset.user_id };
  }
}
