import { createServer } from 'node:http';
import { routes } from './routes.mjs';

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const handler = routes[req.method][url.pathname];

  if (handler) return handler(req, res);

  res.statusCode = 404;
  res.end('Nao encontrado');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
