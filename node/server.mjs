import { createServer } from 'node:http';
import { Router } from './routes.mjs';
import { customRequest } from './custom-request.mjs';

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

const server = createServer(async (request, response) => {
  const req = await customRequest(request);

  const handler = router.find(req.method, req.pathname);
  if (handler) return handler(req, res);

  res.statusCode = 404;
  res.end('Nao encontrado');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
