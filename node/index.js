import { createServer } from 'node:http';

createServer((req, res) => {
  res.statusCode = 200;
  res.end('Olá Mundo!');
}).listen(3000);