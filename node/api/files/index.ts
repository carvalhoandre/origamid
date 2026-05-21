import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";

import { Api } from "../../core/utils/abstract.ts";
import { validate } from "../../core/utils/validate.ts";

export class FilesApi extends Api {
  handlers = {
    sendFile: async (req, res) => {
      const name = validate.file(req.params.name);
      const filePath = `./files/${name}`;
      const file = createReadStream(filePath);

      await pipeline(file, res);
    },
  } satisfies Api["handlers"];

  routes() {
    this.router.get("/files/:name", this.handlers.sendFile);
  }
}
