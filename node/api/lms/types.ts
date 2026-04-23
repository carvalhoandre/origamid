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
