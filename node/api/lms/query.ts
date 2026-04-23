import { Query } from "../../core/utils/abstract.ts";
import type { CourseCreate } from "./types.ts";

export class LmsQuery extends Query {
  insertCourse({ slug, title, description, lessons, hours }: CourseCreate) {
    return this.db
      .query(
        /*sql*/ `
            INSERT OR IGNORE INTO "courses"
            ("slug", "title", "description", "lessons", "hours")
            VALUES (?,?,?,?,?)
            `,
      )
      .run(slug, title, description, lessons, hours);
  }
}
