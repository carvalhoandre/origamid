import { createServer } from 'node:http';

createServer((req, res) => {
  res.statusCode = 200;
  res.end('funcionou agora!');
}).listen(3000);