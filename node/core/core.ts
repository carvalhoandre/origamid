import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
  type Server,
} from "node:http";
import { Router } from "./router.ts";
import { customRequest } from "./http/custom-request.ts";
import { customResponse } from "./http/custom-response.ts";
import { bodyJson } from "./middleware/body-json.ts";
import { RouterError } from "./utils/router-error.ts";
import { Database } from "./database.ts";

export class Core {
  router: Router;
  server: Server;
  db: Database;

  constructor() {
    this.router = new Router();
    this.router.use([bodyJson]);
    this.server = createServer(this.handler);
    this.db = new Database("./lms.sqlite");
  }

  handler = async (request: IncomingMessage, response: ServerResponse) => {
    try {
      const req = await customRequest(request);
      const res = customResponse(response);

      for (const middleware of this.router.middlewares) {
        await middleware(req, res);
      }

      const matched = this.router.find(req.method || "", req.pathname);

      if (!matched) {
        throw new RouterError(404, "Rota nao encontrada");
      }

      const { route, params } = matched;
      req.params = params;

      for (const middleware of route.middlewares) {
        await middleware(req, res);
      }

      await route.handler(req, res);
    } catch (error) {
      if (error instanceof RouterError) {
        console.log(`Error ${error.status}: ${error.message}`);
        response.statusCode = error.status;
        response.setHeader("Content-Type", "application/problem+json");
        response.end(error.message || "Erro interno");
      } else {
        console.log(`Error 500: ${error}`);
        response.statusCode = 500;
        response.setHeader("Content-Type", "application/problem+json");
        response.end("Erro interno");
      }
    }
  };

  init() {
    this.server.listen(3000, () => {
      console.log("Server: http://localhost:3000");
    });
  }
}
