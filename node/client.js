console.clear();
const base = 'http://localhost:3000';

const functions = {
  async postCourse() {
    const response = await fetch(base + '/lms/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug: 'html-e-css',
        title: 'HTML e CSS',
        description: 'Curso de HTML e CSS para iniciantes',
        lessons: 40,
        hours: 10,
      }),
    });
    const body = await response.json();
    console.table(body);
  },
};

functions[process.argv[2]]();
