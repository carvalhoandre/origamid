import { createReadStream, createWriteStream, writeFile } from "node:fs";
import { pipeline } from "node:stream";

// setInterval(() => {
//   console.log("Aguardando arquivos...");
//   for (let i = 0; i < 10; i++) {
//     receiveFileStream(i);
//   }
// }, 3000);

// async function receiveFile(i: number) {
   // const body = await readFile("./dados.json");

//   await writeFile(`./saida${i}.txt`, body, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
// }

async function receiveFileStream(i: number) {
    const readStream = createReadStream("./data.json");
    const writeStream = createWriteStream(`./saida${i}.txt`);

    pipeline(readStream, writeStream, (err) => {
        if (err) {
            console.error("Pipeline failed:", err);
        } else {
            console.log("Pipeline succeeded");
        }
    });
}

async function readStream() {
    const file = createReadStream("./data.json")
    // const dada = await file.toArray();
    const chunks = await file.toArray();

    for await (const chunk of file) {
       chunks.push(chunk);
    }

    const newData = Buffer.concat(chunks);
    console.log(JSON.parse(newData.toString()).name);
}

readStream();