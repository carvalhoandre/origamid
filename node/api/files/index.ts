import path from "node:path";
import {
  rm,
  statSync,
  createReadStream,
  createWriteStream,
  renameSync,
} from "node:fs";
import { pipeline } from "node:stream/promises";

import { checkETag, mimeType } from "./utils.ts";

import { Api } from "../../core/utils/abstract.ts";
import { validate } from "../../core/utils/validate.ts";
import { RouteError } from "../../core/utils/router-error.ts";
import { randomUUID } from "node:crypto";

const MAX_BYTES = 150 * 1024 * 1024; // 150MB

const FILES_PATH = "./files";

export class FilesApi extends Api {
  handlers = {
    sendFile: async (req, res) => {
      const name = validate.file(req.params.name);
      const filePath = `${FILES_PATH}/${name}`;
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

    uploadFile: async (req, res) => {
      const contentLength = Number(req.headers["content-length"]);
      if (!req.headers["x-filename"]) {
        throw new RouteError(400, "Erro ao enviar arquivo");
      }

      if (req.headers["content-type"] !== "application/octet-stream") {
        throw new RouteError(415, "Erro ao enviar arquivo");
      }

      if (!contentLength || isNaN(contentLength) || contentLength <= 0) {
        throw new RouteError(400, "Erro ao enviar arquivo");
      }

      if (contentLength > MAX_BYTES) {
        throw new RouteError(413, "Arquivo muito grande");
      }

      const name = validate.file(req.headers["x-filename"]);
      const tempPath = `${FILES_PATH}/${randomUUID()}`;
      const writeStream = createWriteStream(tempPath);
      const writePath = `${FILES_PATH}/${name}`;

      try {
        await pipeline(req, writeStream);
        renameSync(tempPath, writePath);

        res.status(201).end("Arquivo enviado com sucesso");
      } catch (err) {
        console.error(err);
        throw new RouteError(500, "Erro ao salvar arquivo");
      } finally {
        rm(tempPath, { force: true }, () => {});
      }
    },
  } satisfies Api["handlers"];

  routes() {
    this.router.get("/files/:name", this.handlers.sendFile);
    this.router.post("/files", this.handlers.uploadFile);
  }
}
