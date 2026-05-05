import { readFile } from 'node:fs/promises';

import { AuthApi } from './api/auth/index.ts';
import { LmsApi } from './api/lms/index.ts';

import { Core } from './core/core.ts';
import { logger } from "./core/middleware/looger.ts";
import { RouteError } from './core/utils/router-error.ts';

const core = new Core();

core.router.use([logger]);

new AuthApi(core).init();
new LmsApi(core).init();

core.router.get('/', async (req, res) => {
  const index = await readFile('./front/index.html', 'utf-8');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).end(index);
});

core.router.get('/segura', async (req, res) => {
  const id = req.headers.cookie?.replace('sid=', '');
  
  if (!id) {
    throw new RouteError(401, 'não autenticado');
  }

  const session = core.db
    .query(`SELECT "user_id" FROM "sessions" WHERE "sid_hash" = ?`)
    .get(id);

  if (!session) {
    throw new RouteError(404, 'usuário não encontrado');
  }
  res.status(200).json(session);
});

core.init();
