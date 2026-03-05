import { createServer } from "node:http";
import { Router } from "./routes.mjs";
import { customRequest } from "./custom-request.mjs";
import { customResponse } from "./custom-response.mjs";

import {
  getCursos,
  insertCurso,
  insertAulas,
  getCursoBySlug,
  createDatabase,
  getAulaByCursoAndAulaSlug,
} from "./database.mjs";

createDatabase();

const router = new Router();

router.post("/cursos", (req, res) => {
  const { slug, nome, descricao } = req.body;
  const sucess = insertCurso(slug, nome, descricao);

  if (sucess) {
    res.status(200).end("Curso adicionado com sucesso"); // Added meaningful response
  } else {
    res.status(500).end("Erro ao adicionar curso"); // Added error response
  }
});

router.post("/aulas", (req, res) => {
  const { curso_id, slug, nome } = req.body;
  const sucess = insertAulas(curso_id, slug, nome);

  if (sucess) {
    res.status(200).end("Aula adicionada com sucesso"); // Added meaningful response
  } else {
    res.status(500).end("Erro ao adicionar aula"); // Added error response
  }
});

router.get("/cursos", (req, res) => {
  const cursos = getCursos();

  if (cursos) {
    res.status(200).json(cursos);
  } else {
    res.status(500).end("Erro ao obter cursos");
  }
});

router.get("/curso/:slug_curso", (req, res) => {
  const { slug_curso } = req.params;
  const curso = getCursoBySlug(slug_curso);

  if (curso) {
    res.status(200).json(curso);
  } else {
    res.status(404).end("Curso não encontrado");
  }
});

router.get("/aula/:slug_curso/:slug_aula", (req, res) => {
  const { slug_curso, slug_aula } = req.params;

  const aula = getAulaByCursoAndAulaSlug(slug_curso, slug_aula);

  if (aula) {
    res.status(200).json(aula);
  } else {
    res.status(404).end("Aula não encontrada");
  }
});

const server = createServer(async (request, response) => {
  const req = await customRequest(request);
  const res = await customResponse(response);

  const handler = router.find(req.method, req.pathname);

  if (handler) return handler(req, res);

  res.status(404).end("Not found");
});

server.listen(3000, () => {
  console.log("Server: http://localhost:3000");
});
