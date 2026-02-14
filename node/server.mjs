import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const url = new URL(req.url, 'http://localhost');

  const color = url.searchParams.get('cor');
  const size = url.searchParams.get('tamanho');

  console.log(req.headers['content-type']);

  if (req.method === 'GET' && url.pathname === '/') {
    console.log('Retornado');
  } else if (req.method === 'POST' && url.pathnam === './produtos') {
    res.statusCode = 201;

    console.log('Productos:', color, size);
  } else {
    console.log('Nao encontrado');
  }

  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
