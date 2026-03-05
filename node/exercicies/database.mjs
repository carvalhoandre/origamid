import { DataBaseSync } from "node:sqlite";

export function createDatabase() {
  const db = new DataBaseSync("./db.sqlite");

  db.exec(/*sql*/ `
  PRAGMA foreign_keys = 1;
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;

  PRAGMA cache_size = 2000;
  PRAGMA busy_timeout = 5000;
  PRAGMA temp_store = MEMORY;
`);

  db.exec(/*sql*/ `
  CREATE TABLE IF NOT EXISTS "cursos" (
    "id" INTEGER PRIMARY KEY,
      "slug" TEXT NOT NULL COLLATE NOCASE UNIQUE,
      "nome" TEXT NOT NULL,
      "descricao" TEXT NOT NULL
  )
  `);

  db.exec(/*sql*/ `
     CREATE TABLE IF NOT EXISTS "aulas" (
      "id" INTEGER PRIMARY KEY,
      "curso_id" INTEGER NOT NULL,
      "slug" TEXT NOT NULL COLLATE NOCASE,
      "nome" TEXT NOT NULL,
      FOREIGN KEY("curso_id") REFERENCES "cursos" ("id"),
      UNIQUE("curso_id", "slug")
    ) STRICT;
  
  `);
}

export function insertCurso(db, slug, nome, descricao) {
  try {
    const stmt = db.prepare(/*sql*/ `
    INSERT INTO "cursos" ("slug", "nome", "descricao")
    VALUES (?, ?, ?)
    `);
    stmt.run(slug, nome, descricao);
  } catch (error) {
    console.error("Erro ao inserir curso:", error);
  }
}

export function insertAulas(db, curso_id, slug, nome) {
  try {
    const stmt = db.prepare(/*sql*/ `
    INSERT INTO "aulas" ("curso_id", "slug", "nome")
    VALUES (?, ?, ?)
    `);
    stmt.run(curso_id, slug, nome);
  } catch (error) {
    console.error("Erro ao inserir aula:", error);
  }
}

export function getCursos(db) {
  try {
    const stmt = db.prepare(/*sql*/ `
    SELECT * FROM "cursos"
    `);
    return stmt.all();
  } catch (error) {
    console.error("Erro ao obter cursos:", error);
    return [];
  }
}

export function getAulasByCursoSlug(db, curso_slug) {
  try {
    const stmt = db.prepare(/*sql*/ `
    SELECT a.*
    FROM "aulas" a
    JOIN "cursos" c ON a.curso_id = c.id
    WHERE c.slug = ?
    `);
    return stmt.all(curso_slug);
  } catch (error) {
    console.error("Erro ao obter aulas por curso slug:", error);
    return [];
  }
}

export function getCursoBySlug(db, slug) {
  try {
    const stmt = db.prepare(/*sql*/ `
    SELECT * FROM "cursos" WHERE slug = ?
    `);
    return stmt.get(slug);
  } catch (error) {
    console.error("Erro ao obter curso por slug:", error);
    return null;
  }
}

export function getAulaByCursoAndAulaSlug(db, curso_slug, aula_slug) {
  try {
    const stmt = db.prepare(/*sql*/ `
    SELECT a.*
    FROM "aulas" a
    JOIN "cursos" c ON a.curso_id = c.id
    WHERE c.slug = ? AND a.slug = ?
    `);
    return stmt.get(curso_slug, aula_slug);
  } catch (error) {
    console.error("Erro ao obter aula por curso e aula slug:", error);
    return null;
  }
}
