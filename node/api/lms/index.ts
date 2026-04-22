import { Api } from "../../core/utils/abstract.ts";
import { RouterError } from "../../core/utils/router-error.ts";
import { lmsTables } from "./tables.ts";

export class LmsApi extends Api {
  handles = {
    postCourses: (req, res) => {
      const { slug, title, description, lessons, hours } = req.body;

      const writerResult = this.db
        .query(
          `
        /*sql*/
        INSERT OR IGNORE INTO "courses" 
        ("slug", "title", "description", "lessons", "hours") 
        VALUES (?, ?, ?, ?, ?)  
      `,
        )
        .run(slug, title, description, lessons, hours);

      console.log(writerResult);

      if (writerResult.changes === 0) {
        throw new RouterError(400, "Erro ao criar curso");
      }

      res
        .status(201)
        .json({
          id: writerResult.lastInsertRowid,
          changes: writerResult.changes,
          title: "Curso criado com sucesso",
        });
    },
  } satisfies Api["handles"];

  tables(): void {
    this.db.exec(lmsTables);
  }

  routes(): void {
    this.router.post("/lms/courses", this.handles.postCourses);
  }
}
