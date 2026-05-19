import { createWriteStream } from "fs";
import { createServer } from "http";

const log = createWriteStream("server.log", { flags: "a" });

const server = createServer((req, res) => {
    log.write(`${new Date().toISOString()} - ${req.method} ${req.url} ${req.socket.remoteAddress}\n`);
    log.write('Antes do teste\n');
    res.end("Olá, mundo!");
});

server.listen(3009).on("close", () => {
    log.end();
});