import type { UserRole } from "../types.ts";

import type { Middleware } from "../../../core/router.ts";

import { CoreProvider } from "../../../core/utils/abstract.ts";
import { RouteError } from "../../../core/utils/router-error.ts";
import { COOKIE_SID_KEY, SessionService } from "../services/session.ts";

function rowCheck(requiredRole: UserRole, userRole: UserRole): boolean {
  switch (userRole) {
    case "admin":
      return true;

    case "editor":
      return requiredRole === "editor" || requiredRole === "user";

    case "user":
      return requiredRole === "user";

    default:
      return false;
  }
}

export class AuthMiddleware extends CoreProvider {
  session = new SessionService(this.core);

  guardian =
    (role: UserRole): Middleware =>
    async (req, res) => {
      res.setHeader("Cache-Control", "private, no-store");
      res.setHeader("Vary", "Cookie");

      const sid = req.cookies[COOKIE_SID_KEY];

      if (!sid) {
        console.log("SID ausente");
        throw new RouteError(401, "Nao autorizado");
      }

      const { valid, cookie, session } = this.session.validate(sid);

      res.setCookie(cookie);

      if (!valid || !session) {
        console.log("Sessao invalida");
        throw new RouteError(401, "Nao autorizado");
      }

      if (!rowCheck(role, session.role)) {
        throw new RouteError(403, "Acesso negado");
      }

      req.session = session;
    };

  optional: Middleware = async (req, res) => {
    const sid = req.cookies[COOKIE_SID_KEY];

    if (!sid) return;

    const { valid, cookie, session } = this.session.validate(sid);

    res.setCookie(cookie);

    if (!valid || !session) return;

    res.setHeader("Cache-Control", "private, no-store");
    res.setHeader("Vary", "Cookie");
    req.session = session;
  };
}
