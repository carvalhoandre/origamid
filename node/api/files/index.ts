import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";

import { Api } from "../../core/utils/abstract.ts";

export class FilesApi extends Api {
  handlers = {
    sendFile: async (req, res) => {
      const filePath = `./files/${req.params.name}`;

      const file = createReadStream(filePath);

      await pipeline(file, res);
    },
  } satisfies Api["handlers"];

  routes() {
    this.router.get("/files/:name", this.handlers.sendFile);
  }
}
