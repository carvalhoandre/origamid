import { CoreProvider } from "../../../core/utils/abstract.ts";
import { AuthQuery } from "../query.ts";
import { randomBytesAsync, sha256Hash } from "../utils.ts";

export class SessionService extends CoreProvider {
  query = new AuthQuery(this.db);

  async create({ userId, ip, ua }) {
    const expires_ms = Date.now() + 1000 * 60 * 60 * 24 * 15;
    const sid = (await randomBytesAsync(32)).toString("base64url");
    const sid_hash = sha256Hash(sid);

    this.query.insertSession({
      user_id: userId,
      sid_hash,
      expires_ms,
      ip,
      ua,
    });

    return { sid };
  }
}
