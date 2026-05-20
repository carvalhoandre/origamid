import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = new Transform({
    transform(chunk: Buffer, _, callback) {
        const text = chunk.toString().toUpperCase();
        this.push(text);
        callback();
    }

})

await pipeline(
  createReadStream("./data.json"),
  transform,
  createWriteStream("./data-exit.json")
);