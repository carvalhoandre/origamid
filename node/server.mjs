import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.method === 'GET' && request.url === '/') {
    console.log('Retornado');
  } else if (request.method === 'POST' && request.url === './produtos') {
    response.statusCode = 201;
    console.log('Criado');
  } else {
    console.log('Nao encontrado');
  }

  response.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
