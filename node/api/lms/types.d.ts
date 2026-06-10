type CourseData = {
  id: number;
  slug: string;
  title: string;
  description: string;
  lessons: number;
  hours: number;
  created: string;
};

type CourseCreate = Omit<CourseData, 'id' | 'created'>;

type LessonData = {
  id: number;
  course_id: number;
  slug: string;
  title: string;
  seconds: number;
  video: string;
  description: string;
  order: number;
  free: number; // 0/1
  created: string;
};

type LessonCreate = Omit<LessonData, 'id' | 'course_id' | 'created'> & {
  courseSlug: string;
};

export type CertificateFullData = {
  id: string;
  name: string;
  title: string;
  hours: number;
  lessons: number;
  completed: string;
};
