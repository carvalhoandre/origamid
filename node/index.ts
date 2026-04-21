import { Core } from "./core/core.ts";
import { logger } from "./core/middleware/looger.ts";
import { RouterError } from "./core/utils/router-error.ts";

const core = new Core();

core.db.exec(`CREATE TABLE IF NOT EXISTS produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  price INTEGER,
  title TEXT
);

INSERT OR IGNORE INTO produtos (price, title) VALUES
(100, 'Produto1'),
(200, 'Produto2');
`);

core.router.get("/produto/:slug", (req, res) => {
  const { slug } = req.params;

  const produto = core.db.query("SELECT * FROM produtos WHERE title = ?").get(slug);

  if (!produto) {
    throw new RouterError(404, "produto não encontrado");
  }

  res.status(200).json(produto);
});

core.router.get(
  "/",
  (req, res) => {
    res.status(200).json("hello world");
  },
  [logger],
);

core.init();
