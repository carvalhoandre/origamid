import { createServer } from 'node:http';

createServer((req, res) => {
  res.statusCode = 200;
  res.end(`Ambiente de ${process.env.NODE_ENV}`);
}).listen(3000);