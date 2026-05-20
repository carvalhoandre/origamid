import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";
import { pipeline } from "stream/promises";
// import { createGzip } from "zlib";

const transform = new Transform({
  transform(chunk: Buffer, _, callback) {
    const data = JSON.parse(chunk.toString());
    const vitalicio = data.filter((item: any) => item.vitalicio === true);

    this.push(JSON.stringify(vitalicio));
    callback();
  },
});

// createGzip(),

await pipeline(
  createReadStream("./dados.json", { highWaterMark: 10 }),
  transform,
  createWriteStream("./dados-vitalicio.json"),
);
