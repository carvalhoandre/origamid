import { Query } from "../../core/utils/abstract.ts";

import type {
  UserRole,
  UserCreate,
  ResetCreate,
  SessionData,
  SessionCreate,
  ResetData,
  UserSummary,
} from "./types.d.ts";

export class AuthQuery extends Query {
  insertUser({ name, username, email, role, password_hash }: UserCreate) {
    return this.db
      .query(
        /*sql*/ `
            INSERT OR IGNORE INTO "users"
            ("name", "username", "email", "role", "password_hash")
            VALUES (?,?,?,?,?)
            `,
      )
      .run(name, username, email, role, password_hash);
  }

  selectUser(key: "email" | "id" | "username", value: string | number) {
    return this.db
      .query(
        /*sql*/ `
            SELECT "id", "password_hash", "email" FROM "users"
            WHERE ${key} = ?
            `,
      )
      .get(value) as
      | { id: number; password_hash: string; email: string }
      | undefined;
  }

  insertSession({ sid_hash, user_id, expires_ms, ip, ua }: SessionCreate) {
    return this.db
      .query(
        /*sql*/ `
            INSERT OR IGNORE INTO "sessions"
            ("sid_hash", "user_id", "expires", "ip", "ua")
            VALUES (?,?,?,?,?)
            `,
      )
      .run(sid_hash, user_id, Math.floor(expires_ms / 1000), ip, ua);
  }

  selectSession(sid_hash: Buffer) {
    return this.db
      .query(
        /*sql*/ `
            SELECT "s".*, "s"."expires" * 1000 as "expires_ms" FROM "sessions" as "s"
            WHERE s.sid_hash = ?
            `,
      )
      .get(sid_hash) as (SessionData & { expires_ms: number }) | undefined;
  }

  revokeSession(sid_hash: Buffer) {
    return this.db
      .query(
        /*sql*/ `
            UPDATE "sessions" SET "revoked" = 1
            WHERE "sid_hash" = ?
            `,
      )
      .run(sid_hash);
  }

  revokeSessions(user_id: number) {
    return this.db
      .query(
        /*sql*/ `
            UPDATE "sessions" SET "revoked" = 1
            WHERE "user_id" = ?
            `,
      )
      .run(user_id);
  }

  updateSessionExpires(sid_hash: Buffer, expires_ms: number) {
    return this.db
      .query(
        /*sql*/ `
            UPDATE "sessions" SET "expires" = ?
            WHERE "sid_hash" = ?
            `,
      )
      .run(Math.floor(expires_ms / 1000), sid_hash);
  }

  selectUserRole(id: number) {
    return this.db
      .query(
        /*sql*/ `
            SELECT "role" FROM "users"
            WHERE id = ?
            `,
      )
      .get(id) as { role: UserRole } | undefined;
  }

  updateUserPassword(
    user_id: number,
    key: "password_hash" | "email" | "username",
    value: string,
  ) {
    return this.db
      .query(
        /*sql*/ `
            UPDATE "users" SET ${key} = ?
            WHERE "id" = ?
            `,
      )
      .run(value, user_id);
  }

  insertReset({ token_hash, user_id, expires_ms, ip, ua }: ResetCreate) {
    return this.db
      .query(
        /*sql*/ `
            INSERT OR IGNORE INTO "resets"
            ("token_hash", "user_id", "expires", "ip", "ua")
            VALUES (?,?,?,?,?)
            `,
      )
      .run(token_hash, user_id, Math.floor(expires_ms / 1000), ip, ua);
  }

  selectReset(token_hash: Buffer) {
    return this.db
      .query(
        /*sql*/ `
            SELECT "r".*, "r"."expires" * 1000 as "expires_ms" FROM "resets" as "r"
            WHERE r.token_hash = ?
            `,
      )
      .get(token_hash) as (ResetData & { expires_ms: number }) | undefined;
  }

  deleteReset(user_id: number) {
    return this.db
      .query(
        /*sql*/ `
            DELETE FROM "resets"
            WHERE "user_id" = ?
            `,
      )
      .run(user_id);
  }

  selectUsers(search: string = '', limit: number = 10, page: number = 1) {
    const s = `%${search.trim()}%`;
    const safeLimit = limit < 100 ? limit : 100;
    const offset = (page - 1) * safeLimit;

    return this.db
      .query(
        /*sql*/ `
            SELECT "id", "name", "email", "created",
            COUNT(*) OVER() as "total"
            FROM "users"
            WHERE "name" LIKE ? OR "username" LIKE ? OR "email" LIKE ?
            ORDER BY "created" DESC
            LIMIT ? OFFSET ?
            `,
      )
      .all(s, s, s, safeLimit, offset) as UserSummary[];
  }
}
