import { DataBaseSync } from "node:sqlite";

const db = new DataBaseSync("./db.sqlite");

db.exec(`
  PRAGMA foreign_keys = 1;
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;

  PRAGMA cache_size = -64000;
  PRAGMA busy_timeout = 5000;
  PRAGMA temp_store = MEMORY;
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS "products" (
    "slug" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL
  )
  `);

const insert = db.prepare(`INSERT OR IGNORE INTO "products" ("slug", "name", "category", "price")
   VALUES
  ('?', '?', '?', ?),
  `);

  insert.run("apple", "Apple", "fruit", 100);
  insert.run("banana", "Banana", "fruit", 50);
  insert.run("carrot", "Carrot", "vegetable", 30);

const select = db.prepare(`SELECT * FROM "products" WHERE "category" = ?`);

const fruits = select.all("fruit");
console.log(fruits);
