export type CourseData = {
  id: number;
  slug: string;
  title: string;
  description: string;
  lessons: number;
  hours: number;
  created: string;
};

export type CourseCreate = Omit<CourseData, "id" | "created">;

export type LessonData = {
  id: number;
  course_id: number;
  slug: string;
  title: string;
  seconds: number;
  video: string;
  description: string;
  order: number;
  free: number; // 0 ou 1
  created: string;
};

export type LessonCreate = Omit<LessonData, "id" | "course_id" | "created"> & {
  courseSlug: string;
};
