import { Api } from "../../core/utils/abstract.ts";
import { RouteError } from "../../core/utils/router-error.ts";
import { validate } from "../../core/utils/validate.ts";
import { AuthMiddleware } from "../auth/middleware/auth.ts";
import { LmsQuery } from "./query.ts";

import { lmsTables } from "./tables.ts";
import type { LessonCompleted } from "./types.ts";

export class LmsApi extends Api {
  query = new LmsQuery(this.db);
  auth = new AuthMiddleware(this.core);

  handlers = {
    postCourse: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }

      const { slug, title, description, lessons, hours } = {
        slug: validate.string(req.body.slug),
        title: validate.string(req.body.title),
        description: validate.string(req.body.description),
        lessons: validate.number(req.body.lessons),
        hours: validate.number(req.body.hours),
      };

      const writeResult = this.query.insertCourse({
        slug,
        title,
        description,
        lessons,
        hours,
      });

      if (writeResult.changes === 0) {
        throw new RouteError(400, "erro ao criar curso");
      }

      res.status(201).json({
        id: writeResult.lastInsertRowid,
        changes: writeResult.changes,
        title: "curso criado",
      });
    },

    postLesson: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }

      const {
        courseSlug,
        slug,
        title,
        seconds,
        video,
        description,
        order,
        free,
      } = {
        courseSlug: validate.string(req.body.courseSlug),
        slug: validate.string(req.body.slug),
        title: validate.string(req.body.title),
        seconds: validate.number(req.body.seconds),
        video: validate.string(req.body.video),
        description: validate.string(req.body.description),
        order: validate.number(req.body.order),
        free: validate.number(req.body.free),
      };

      const writeResult = this.query.insertLesson({
        courseSlug,
        slug,
        title,
        seconds,
        video,
        description,
        order,
        free,
      });

      if (writeResult.changes === 0) {
        throw new RouteError(400, "erro ao criar aula");
      }

      res.status(201).json({
        id: writeResult.lastInsertRowid,
        changes: writeResult.changes,
        title: "aula criada",
      });
    },

    getCourses: (req, res) => {
      const courses = this.query.selectCourses();

      if (courses.length === 0) {
        throw new RouteError(404, "nenhum curso encontrado");
      }

      res.status(200).json(courses);
    },

    getCourse: (req, res) => {
      const { slug } = {
        slug: validate.string(req.params.slug),
      };
      const course = this.query.selectCourse(slug);
      const lessons = this.query.selectLessons(slug);

      if (!course) {
        throw new RouteError(404, "curso não encontrado");
      }

      let completed: LessonCompleted[] = [];

      if (req.session) {
        completed = this.query.selectLessonsCompleted(
          req.session?.user_id,
          course.id,
        );
      }

      res.status(200).json({ course, lessons, completed });
    },

    getLesson: (req, res) => {
      const { courseSlug, lessonSlug } = {
        courseSlug: validate.string(req.params.courseSlug),
        lessonSlug: validate.string(req.params.lessonSlug),
      };
      const lesson = this.query.selectLesson(courseSlug, lessonSlug);
      const nav = this.query.selectLessonNav(courseSlug, lessonSlug);

      if (!lesson) {
        throw new RouteError(404, "aula não encontrada");
      }

      const i = nav.findIndex((n) => n.slug === lesson.slug);
      const prev = i === 0 ? null : (nav.at(i - 1)?.slug ?? null);
      const next = nav.at(i + 1)?.slug ?? null;

      let completed = "";

      if (req.session) {
        const lessonCompleted = this.query.selectLessonCompleted(
          req.session.user_id,
          lesson.id,
        );

        if (lessonCompleted) {
          completed = lessonCompleted.completed;
        }
      }

      res.status(200).json({ ...lesson, prev, next, completed });
    },

    completeLesson: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }
      const userId = req.session.user_id;

      const { courseId, lessonId } = {
        courseId: validate.number(req.body.courseId),
        lessonId: validate.number(req.body.lessonId),
      };

      const writeResult = this.query.insertLessonCompleted(
        userId,
        courseId,
        lessonId,
      );

      if (writeResult.changes === 0) {
        throw new RouteError(400, "erro ao marcar aula como concluída");
      }

      const progress = this.query.selectProgress(userId, courseId);
      const incompleteLessons = progress.filter((item) => !item.completed);

      if (progress.length > 0 && incompleteLessons.length === 0) {
        const certificate = this.query.insertCertificate(userId, courseId);

        if (!certificate) {
          throw new RouteError(400, "erro ao gerar certificado");
        }

        res.status(201).json({
          certificate: certificate.id,
          title: "aula concluída",
        });
        return;
      }

      res.status(201).json({
        certificate: null,
        title: "aula concluída",
      });
    },

    resetCourse: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }

      const { courseId } = {
        courseId: validate.number(req.body.courseId),
      };

      const writeResultLessons = this.query.deleteLessonsCompleted(
        req.session.user_id,
        courseId,
      );

      if (writeResultLessons.changes === 0) {
        throw new RouteError(400, "Erro ao resetar curso");
      }

      const writeResultCertificate = this.query.deleteCertificate(
        req.session.user_id,
        courseId,
      );

      if (writeResultCertificate.changes === 0) {
        throw new RouteError(400, "Erro ao resetar curso");
      }

      res.status(200).json({
        title: "Curso resetado",
      });
    },

    getCertificates: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }
      const userId = req.session.user_id;

      const certificates = this.query.selectCertificates(userId);

      if (certificates.length === 0) {
        throw new RouteError(404, "Nenhum certificado encontrado");
      }

      res.status(200).json(certificates);
    },

    getCertificate: (req, res) => {
      const { id } = {
        id: validate.string(req.params.id),
      };
      const certificate = this.query.selectCertificate(id);

      if (!certificate) {
        throw new RouteError(404, "certificado não encontrado");
      }

      res.status(200).json(certificate);
    },

    getLessons: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }

      const lessons = this.query.selectAllLessons();

      if (lessons.length === 0) {
        throw new RouteError(404, "Nenhuma aula encontrada");
      }

      res.status(200).json(lessons);
    },

    deleteCourse: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }

      const { id } = {
        id: validate.number(req.params.id),
      };

      if (!id) {
        throw new RouteError(400, "ID inválido");
      }

      const writeResult = this.query.deleteCourse(id);

      if (writeResult.changes === 0) {
        throw new RouteError(400, "Erro ao deletar curso");
      }

      res.status(200).json({
        title: "Curso deletado",
      });
    },

    deleteLesson: (req, res) => {
      if (!req.session) {
        throw new RouteError(401, "Nao autorizado");
      }

      const { id } = {
        id: validate.number(req.params.id),
      };

      if (!id) {
        throw new RouteError(400, "ID inválido");
      }

      const writeResult = this.query.deleteLesson(id);

      if (writeResult.changes === 0) {
        throw new RouteError(400, "Erro ao deletar aula");
      }

      res.status(200).json({
        title: "Aula deletada",
      });
    },
  } satisfies Api["handlers"];

  tables(): void {
    this.db.exec(lmsTables);
  }

  routes(): void {
    this.router.post("/lms/course", this.handlers.postCourse, [
      this.auth.guardian("admin"),
    ]);
    this.router.post("/lms/lesson", this.handlers.postLesson, [
      this.auth.guardian("admin"),
    ]);
    this.router.get("/lms/courses", this.handlers.getCourses);
    this.router.get("/lms/lessons", this.handlers.getLessons, [
      this.auth.guardian("admin"),
    ]);
    this.router.get("/lms/course/:slug", this.handlers.getCourse, [
      this.auth.optional,
    ]);
    this.router.delete("/lms/course/reset", this.handlers.resetCourse, [
      this.auth.guardian("user"),
    ]);
    this.router.get(
      "/lms/lesson/:courseSlug/:lessonSlug",
      this.handlers.getLesson,
      [this.auth.optional],
    );
    this.router.post("/lms/lesson/complete", this.handlers.completeLesson, [
      this.auth.guardian("user"),
    ]);
    this.router.get("/lms/certificates", this.handlers.getCertificates, [
      this.auth.guardian("user"),
    ]);
    this.router.get("/lms/certificate/:id", this.handlers.getCertificate);
    this.router.delete("/lms/course/:id", this.handlers.deleteCourse, [
      this.auth.guardian("admin"),
    ]);
    this.router.delete("/lms/lesson/:id", this.handlers.deleteLesson, [
      this.auth.guardian("admin"),
    ]);
  }
}
