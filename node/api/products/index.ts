import { Api } from "../../core/utils/abstract.ts";
import { RouterError } from "../../core/utils/router-error.ts";

export class ProdutsApi extends Api {
  handles = {
    getProducts: (req, res) => {
      const { slug } = req.params;

      const product = this.db
        .query(`SELECT * FROM "products" WHERE "slug" = ?`)
        .get(slug);
        
      if (!product) {
        throw new RouterError(404, "Produto não encontrado");
      }

      res.status(200).json(product);
    },
  } satisfies Api["handles"];

  tables() {
    this.db.exec(`CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            slug TEXT,
            price INTEGER NOT NULL
        )`);
  }

  routes() {
    this.router.get("/products/:slug", this.handles.getProducts);
  }
}
