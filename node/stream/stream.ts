import { createReadStream, createWriteStream, writeFile } from "node:fs";
import { pipeline } from "node:stream";

const { readFile } = require("node:fs");

setInterval(() => {
  console.log("Aguardando arquivos...");
  for (let i = 0; i < 10; i++) {
    receiveFileStream(i);
  }
}, 3000);

async function receiveFile(i: number) {
  const body = await readFile("./entrada.txt", "utf-8");

  await writeFile(`./saida${i}.txt`, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

async function receiveFileStream(i: number) {
    const readStream = createReadStream("./entrada.txt", "utf-8");
    const writeStream = createWriteStream(`./saida${i}.txt`);

    pipeline(readStream, writeStream, (err) => {
        if (err) {
            console.error("Pipeline failed:", err);
        } else {
            console.log("Pipeline succeeded");
        }
    });
}
