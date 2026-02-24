import { createServer } from 'node:http';
import { Router } from './routes.mjs';
import { customRequest } from './custom-request.mjs';
import { customResponse } from './custom-response.mjs';

const router = new Router();

router.post('/produtos', (req, res) => {
  res.status(200).end('Product added successfully'); // Added meaningful response
});
router.get('/produtos', (req, res) => {
  res.status(200).end('Product list retrieved successfully'); // Added leading slash
});

const server = createServer(async (request, response) => {
  const req = await customRequest(request);
  const res = await customResponse(response);

  const handler = router.find(req.method, req.pathname);

  if (handler) return handler(req, res);

  res.status(404).end('Not found');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
