import { Api } from "../../core/utils/abstract.ts";
import { RouteError } from "../../core/utils/router-error.ts";

import { AuthQuery } from "./query.ts";
import { COOKIE_SID_KEY, SessionService } from "./services/session.ts";
import { authTables } from "./tables.ts";
import { AuthMiddleware } from "./middleware/auth.ts";
import { Password } from "./utils/password.ts";

export class AuthApi extends Api {
  query = new AuthQuery(this.db);
  session = new SessionService(this.core);
  auth = new AuthMiddleware(this.core);
  password = new Password("segredo");

  handlers = {
    postUser: async (req, res) => {
      const { name, username, email, password } = req.body;

      const emailExist = this.query.selectUser("email", email);
      if (emailExist) {
        throw new RouteError(409, "Email já cadastrado");
      }

      const usernameExist = this.query.selectUser("username", username);
      if (usernameExist) {
        throw new RouteError(409, "Username já cadastrado");
      }

      const password_hash = await this.password.hash(password);

      const writeResult = this.query.insertUser({
        name,
        username,
        email,
        role: "user",
        password_hash,
      });

      if (writeResult.changes === 0) {
        throw new RouteError(400, "erro ao criar usuário");
      }

      res.status(201).json({
        title: "usuário criado",
      });
    },

    postLogin: async (req, res) => {
      const { email, password } = req.body;
      const user = this.query.selectUser("email", email);

      if (!user) {
        throw new RouteError(404, "Email ou senha incorretos");
      }

      const passwordValid = await this.password.verify(
        password,
        user.password_hash,
      );

      if (!passwordValid) {
        throw new RouteError(404, "Email ou senha incorretos");
      }

      const { cookie } = await this.session.create({
        userId: user.id,
        ip: req.ip,
        ua: req.headers["user-agent"] ?? "",
      });

      res.setCookie(cookie);
      res.status(200).json("autenticado");
    },

    getSession: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "não autorizado");
      }

      res.status(200).json({ title: "sessão válida" });
    },

    deleteSession: (req, res) => {
      const sid = req.cookies[COOKIE_SID_KEY];

      if (!sid) {
        throw new RouteError(401, "não autorizado");
      }

      const { cookie } = this.session.invalidate(sid);

      res.setCookie(cookie);
      res.setHeader("Cache-Control", "private, no-store");
      res.setHeader("Vary", "Cookie");
      res.status(204).json({ title: "logout" });
    },

    updatePassword: async (req, res) => {
      const { new_password, password } = req.body;

      if (!req.session) {
        throw new RouteError(401, "não autorizado");
      }

      const user = this.query.selectUser("id", req.session.user_id);

      if (!user) {
        throw new RouteError(404, "Usuário não encontrado");
      }

      const passwordValid = await this.password.verify(
        password,
        user.password_hash,
      );

      if (!passwordValid) {
        throw new RouteError(404, "Senha atual incorreta");
      }

      const new_password_hash = await this.password.hash(new_password);
      const updateResult = this.query.updateUserPassword(
        user.id,
        "password_hash",
        new_password_hash,
      );

      if (updateResult.changes === 0) {
        throw new RouteError(400, "Erro ao atualizar senha");
      }

      this.session.invalidateAll(user.id);

      const { cookie } = await this.session.create({
        userId: user.id,
        ip: req.ip,
        ua: req.headers["user-agent"] ?? "",
      });

      res.setCookie(cookie);
      res.status(200).json({ title: "Senha atualizada" });
    },
  } satisfies Api["handlers"];

  tables(): void {
    this.db.exec(authTables);
  }

  routes(): void {
    this.router.post("/auth/user", this.handlers.postUser);
    this.router.post("/auth/login", this.handlers.postLogin);
    this.router.get("/auth/session", this.handlers.getSession, [
      this.auth.guardian("user"),
    ]);
    this.router.put("/auth/update/password", this.handlers.updatePassword, [
      this.auth.guardian("user"),
    ]);
    this.router.delete("/auth/logout", this.handlers.deleteSession);
  }
}
