import { Query } from "../../core/utils/abstract.ts";

export type UserRole = "admin" | "editor" | "user";

export type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  password_hash: string;
  created: string;
  updated: string;
};

export type UserCreate = Omit<UserData, "id" | "created" | "updated">;

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
}
