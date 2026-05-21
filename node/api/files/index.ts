import path from "node:path";
import { createReadStream, statSync } from "node:fs";
import { pipeline } from "node:stream/promises";

import { checkETag, mimeType } from "./utils.ts";

import { Api } from "../../core/utils/abstract.ts";
import { validate } from "../../core/utils/validate.ts";
import { RouteError } from "../../core/utils/router-error.ts";

export class FilesApi extends Api {
  handlers = {
    sendFile: async (req, res) => {
      const name = validate.file(req.params.name);
      const filePath = `./files/${name}`;
      const ext = path.extname(name);
      let stats;

      try {
        stats = statSync(filePath);
      } catch (err) {
        throw new RouteError(404, "Arquivo não encontrado");
      }
      const etag = `W/${stats.size.toString(16)}-${Math.floor(stats.mtimeMs).toString(16)}`;

      res.setHeader("ETag", etag);
      res.setHeader("Content-Length", stats.size);
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("Last-Modified", stats.mtime.toUTCString());
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
      res.setHeader(
        "Content-Type",
        mimeType[ext] || "application/octet-stream",
      );

      if (checkETag(req.headers["if-none-match"], etag)) {
        res.status(304);
        res.end();
        return;
      }

      res.status(200);

      const file = createReadStream(filePath);

      await pipeline(file, res);
    },
  } satisfies Api["handlers"];

  routes() {
    this.router.get("/files/:name", this.handlers.sendFile);
  }
}
