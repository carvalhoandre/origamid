import { Query } from "../../core/utils/abstract.ts";
import type {
  CourseCreate,
  CourseData,
  LessonCreate,
  LessonData,
} from "./types.ts";

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

  insertLesson({
    courseSlug,
    slug,
    title,
    seconds,
    video,
    description,
    order,
    free,
  }: LessonCreate) {
    return this.db
      .query(
        /*sql*/ `
            INSERT OR IGNORE INTO "lessons"
            ("course_id", "slug", "title", "seconds",
            "video", "description", "order", "free")
            VALUES ((SELECT "id" FROM "courses" WHERE "slug" = ?),?,?,?,?,?,?,?)`,
      )
      .run(courseSlug, slug, title, seconds, video, description, order, free);
  }

  selectCourses() {
    return this.db
      .query(
        /*sql*/ `
          SELECT * FROM "courses" 
          ORDER BY "created" DESC
          LIMIT 100
        `,
      )
      .all() as CourseData[];
  }

  selectCourse(slug: string) {
    return this.db
      .query(
        /*sql*/ `
          SELECT * FROM "courses" 
          WHERE "slug" = ?
          LIMIT 1
        `,
      )
      .get(slug) as CourseData | undefined;
  }

  selectLessons(courseSlug: string) {
    return this.db
      .query(
        /*sql*/ `
          SELECT * FROM "lessons" 
          WHERE "course_id" = (SELECT "id" FROM "courses" WHERE "slug" = ?)
          ORDER BY "order" ASC
        `,
      )
      .all(courseSlug) as LessonData[];
  }

  selectLesson(courseSlug: string, lessonSlug: string) {
    return this.db
      .query(
        /*sql*/ `
          SELECT * FROM "lessons" 
          WHERE "course_id" = (SELECT "id" FROM "courses" WHERE "slug" = ?)
          AND "slug" = ?
        `,
      )
      .get(courseSlug, lessonSlug) as LessonData | undefined;
  }

  selectLessonNav(courseSlug: string, lessonSlug: string) {
    return this.db
      .query(
        /*sql*/ `
          SELECT "slug" FROM "lesson_nav" 
          WHERE "course_id" = (SELECT "id" FROM "courses" WHERE "slug" = ?)
          AND "current_slug" = ?
        `,
      )
      .all(courseSlug, lessonSlug) as { slug: string }[];
  }
}
