import { createWriteStream, createReadStream } from "fs";
import { createServer } from "http";
import { pipeline } from "stream/promises";

const log = createWriteStream("server.log", { flags: "a" });

const server = createServer(async (req, res) => {
  try {
    const data = createReadStream("../data.json");

    log.write(
      `${new Date().toISOString()} - ${req.method} ${req.url} ${req.socket.remoteAddress}\n`,
    );
    res.setHeader("Content-Type", "application/json");
    await pipeline(data, res);
  } catch (err) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(3009).on("close", () => {
  log.end();
});
