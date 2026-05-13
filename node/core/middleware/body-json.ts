import { type Middleware } from "../router.ts";
import { RouteError } from "../utils/router-error.js";

const MAX_BYTES = 5_000_000;

export const bodyJson: Middleware = async (req, res) => {
  if (
    req.headers["content-type"] !== "application/json" &&
    req.headers["content-type"] !== "application/json; charset=utf-8"
  ) {
    return;
  }

  const contentLength = Number(req.headers["content-length"]);

  if (Number.isInteger(contentLength)) {
    throw new RouteError(400, "Bad Request");
  }

  if (contentLength > MAX_BYTES) {
    throw new RouteError(413, "Payload Too Large");
  }

  const chunks: Buffer[] = [];
  let size = 0;

  try {
    for await (const chunk of req) {
      const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      size += buf.length;

      if (size > MAX_BYTES) {
        throw new RouteError(413, "Payload Too Large");
      }

      chunks.push(buf);
    }
  } catch (err) {
    throw new RouteError(400, "Bad Request");
  }

  try {
    const body = Buffer.concat(chunks).toString("utf-8");

    if (body === "") {
      req.body = {};
      return;
    }

    req.body = JSON.parse(body);
  } catch (err) {
    throw new RouteError(400, "Bad Request");
  }
};
