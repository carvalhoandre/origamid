import { Core } from "./core/core.ts";
import { pegarCurso } from "./core/database.ts";
import { logger } from "./core/middleware/looger.ts";
import { RouterError } from "./core/utils/router-error.ts";

const core = new Core();

core.router.get("/curso/:slug", (req, res) => {
  const { slug } = req.params;
  const curso = pegarCurso(slug);

  if (!curso) {
    throw new RouterError(404, "Curso não encontrado");
  }

  res.status(200).json(curso);
});

core.router.get(
  "/",
  (req, res) => {
    res.status(200).json("hello world");
  },
  [logger],
);

core.init();
