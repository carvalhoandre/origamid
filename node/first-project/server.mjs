import { createServer } from 'node:http';

import { Router } from './routes.mjs';
import { customRequest } from './custom-request.mjs';
import { customResponse } from './custom-response.mjs';

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).end('Home');
});
router.get('/produto/notebook', (req, res) => {
  res.status(200).end('Produtos - Notebbok');
});
router.post('/produto', (req, res) => {
  res.status(201).json({ name: 'Notebook', color: 'blue' });
});

const server = createServer(async (request, response) => {
  const req = await customRequest(request);
  const res = customResponse(response);

  const handler = router.find(req.method, req.pathname);
  if (handler) return handler(req, res);

  res.status(404).end('Nao encontrado');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
