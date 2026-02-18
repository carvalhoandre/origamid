import { createServer } from 'node:http';
import { Router } from './routes.mjs';

const router = new Router();

router.get('/', (req, res) => {
  res.end('Home');
});
router.get('/produto/notebook', (req, res) => {
  res.end('Produtos - Notebbok');
});
router.post('/produto', (req, res) => {
  res.end('Notebbok Post');
});

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const handler = router.routes[req.method][url.pathname];

  if (handler) return handler(req, res);

  res.statusCode = 404;
  res.end('Nao encontrado');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
