import { createReadStream, createWriteStream } from "fs";
import { createInterface } from "readline/promises";

const read = createReadStream("./dados.ndjson");
const write = createWriteStream("./dados-vitalicio.json");

const lines = createInterface({
  input: read,
  crlfDelay: Infinity,
});

for await (const line of lines) {
  const data = JSON.parse(line);
  if (data.vitalicio) {
    write.write(`${line}\n`);
  }
}

write.end();