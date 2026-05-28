console.clear();
const base = "http://localhost:3000";

const courses = {
  html: {
    slug: "html-e-css",
    title: "HTML e CSS",
    description: "Curso de HTML e CSS para Iniciantes",
    lessons: 40,
    hours: 10,
  },
  javascript: {
    slug: "javascript-completo",
    title: "JavaScript Completo",
    description: "Curso completo de JavaScript",
    lessons: 80,
    hours: 20,
  },
};

const lessons = [
  // {
  //   courseSlug: "html-e-css",
  //   slug: "tags-basicas",
  //   title: "Tags Básicas",
  //   seconds: 200,
  //   video: "/html/tags-basicas.mp4",
  //   description: "Aula sobre as Tags Básicas",
  //   order: 1,
  //   free: 1,
  // },
  // {
  //   courseSlug: "html-e-css",
  //   slug: "estrutura-do-documento",
  //   title: "Estrutura do Documento",
  //   seconds: 420,
  //   video: "/html/estrutura-do-documento.mp4",
  //   description: "Estrutura básica: <!DOCTYPE>, <html>, <head> e <body>.",
  //   order: 2,
  //   free: 1,
  // },
  // {
  //   courseSlug: "html-e-css",
  //   slug: "links-e-imagens",
  //   title: "Links e Imagens",
  //   seconds: 540,
  //   video: "/html/links-e-imagens.mp4",
  //   description: "Como usar <a> e <img>, caminhos relativos e absolutos.",
  //   order: 3,
  //   free: 0,
  // },
  // {
  //   courseSlug: "html-e-css",
  //   slug: "listas-e-tabelas",
  //   title: "Listas e Tabelas",
  //   seconds: 600,
  //   video: "/html/listas-e-tabelas.mp4",
  //   description:
  //     "Listas ordenadas/não ordenadas e estrutura básica de tabelas.",
  //   order: 4,
  //   free: 0,
  // },
  // {
  //   courseSlug: "html-e-css",
  //   slug: "formularios-basicos",
  //   title: "Formulários Básicos",
  //   seconds: 780,
  //   video: "/html/formularios-basicos.mp4",
  //   description: "Inputs, labels, selects e boas práticas de acessibilidade.",
  //   order: 5,
  //   free: 0,
  // },
  // {
  //   courseSlug: "html-e-css",
  //   slug: "semantica-e-acessibilidade",
  //   title: "Semântica e Acessibilidade",
  //   seconds: 660,
  //   video: "/html/semantica-e-acessibilidade.mp4",
  //   description: "Tags semânticas e acessibilidade para iniciantes.",
  //   order: 6,
  //   free: 0,
  // },

  // JavaScript
  {
    courseSlug: "javascript-completo",
    slug: "introducao-e-variaveis",
    title: "Introdução e Variáveis",
    seconds: 480,
    video: "/javascript/introducao-e-variaveis.mp4",
    description: "Como o JS funciona, let/const e escopo.",
    order: 1,
    free: 1,
  },
  {
    courseSlug: "javascript-completo",
    slug: "tipos-e-operadores",
    title: "Tipos e Operadores",
    seconds: 540,
    video: "/javascript/tipos-e-operadores.mp4",
    description: "Tipos primitivos, objetos e operadores comuns.",
    order: 2,
    free: 1,
  },
  {
    courseSlug: "javascript-completo",
    slug: "funcoes-basico",
    title: "Funções (Básico)",
    seconds: 600,
    video: "/javascript/funcoes-basico.mp4",
    description: "Declaração, expressão, parâmetros e retorno.",
    order: 3,
    free: 0,
  },
  {
    courseSlug: "javascript-completo",
    slug: "manipulando-o-dom",
    title: "Manipulando o DOM",
    seconds: 660,
    video: "/javascript/manipulando-o-dom.mp4",
    description: "Selecionar, criar e alterar elementos com JS.",
    order: 4,
    free: 0,
  },
  {
    courseSlug: "javascript-completo",
    slug: "eventos-no-navegador",
    title: "Eventos no Navegador",
    seconds: 600,
    video: "/javascript/eventos-no-navegador.mp4",
    description: "addEventListener, propagação e preventDefault.",
    order: 5,
    free: 0,
  },
  {
    courseSlug: "javascript-completo",
    slug: "fetch-e-async-await",
    title: "Fetch e Async/Await",
    seconds: 720,
    video: "/javascript/fetch-e-async-await.mp4",
    description: "Requisições HTTP, Promises e fluxo assíncrono.",
    order: 6,
    free: 0,
  },
];

const users = [
  { name: "André", username: "andre123", email: "andreoutro@example.com", password: "password123" },
  { name: "Beatriz", username: "beatriz456", email: "beatriz@example.com", password: "senha456" },
  { name: "Carlos", username: "carlos789", email: "carlos@example.com", password: "carlos789" },
  { name: "Daniela", username: "daniela01", email: "daniela@example.com", password: "dani2024" },
  { name: "Eduardo", username: "eduardo02", email: "eduardo@example.com", password: "edu12345" },
  { name: "Fernanda", username: "fernanda03", email: "fernanda@example.com", password: "fer98765" },
  { name: "Gabriel", username: "gabriel04", email: "gabriel@example.com", password: "gab11111" },
  { name: "Helena", username: "helena05", email: "helena@example.com", password: "hel22222" },
  { name: "Igor", username: "igor06", email: "igor@example.com", password: "igor33333" },
  { name: "Juliana", username: "juliana07", email: "juliana@example.com", password: "jul44444" },
  { name: "Kevin", username: "kevin08", email: "kevin@example.com", password: "kev55555" },
  { name: "Larissa", username: "larissa09", email: "larissa@example.com", password: "lar66666" },
  { name: "Marcos", username: "marcos10", email: "marcos@example.com", password: "mar77777" },
  { name: "Natália", username: "natalia11", email: "natalia@example.com", password: "nat88888" },
  { name: "Otávio", username: "otavio12", email: "otavio@example.com", password: "ota99999" },
  { name: "Patrícia", username: "patricia13", email: "patricia@example.com", password: "pat00000" },
  { name: "Rafael", username: "rafael14", email: "rafael@example.com", password: "raf13579" },
  { name: "Sabrina", username: "sabrina15", email: "sabrina@example.com", password: "sab24680" },
  { name: "Thiago", username: "thiago16", email: "thiago@example.com", password: "thi11223" },
  { name: "Ursula", username: "ursula17", email: "ursula@example.com", password: "urs33445" },
  { name: "Vinícius", username: "vinicius18", email: "vinicius@example.com", password: "vin55667" },
  { name: "Wanderson", username: "wanderson19", email: "wanderson@example.com", password: "wan77889" },
  { name: "Xuxa", username: "xuxa20", email: "xuxa@example.com", password: "xux99001" },
  { name: "Yasmin", username: "yasmin21", email: "yasmin@example.com", password: "yas12321" },
  { name: "Zara", username: "zara22", email: "zara@example.com", password: "zar45654" },
  { name: "Alexandre", username: "alexandre23", email: "alexandre@example.com", password: "ale78987" },
  { name: "Bruna", username: "bruna24", email: "bruna@example.com", password: "bru10101" },
  { name: "Cauã", username: "caua25", email: "caua@example.com", password: "cau20202" },
  { name: "Débora", username: "debora26", email: "debora@example.com", password: "deb30303" },
  { name: "Evandro", username: "evandro27", email: "evandro@example.com", password: "eva40404" },
]

const functions = {
  async postCourse() {
    const response = await fetch(base + "/lms/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses.javascript),
    });
    const body = await response.json();
    console.table(body);
  },

  async postLesson() {
    const response = await fetch(base + "/lms/lesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lessons[1]),
    });
    const body = await response.json();
    console.table(body);
  },

  async getCourses() {
    const response = await fetch(base + "/lms/courses");
    const body = await response.json();
    console.log(body);
  },

  async getCourse() {
    const response = await fetch(base + `/lms/course/javascript-completo`);
    const body = await response.json();
    console.log(body);
  },

  async getLesson() {
    const response = await fetch(
      base + `/lms/lesson/javascript-completo/tags-basicas`,
    );
    const body = await response.json();
    console.log(body);
  },

  async postUser(user) {
    const response = await fetch(base + "/auth/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();
    console.table(body);
  },

  async postLessonCompleted() {
    const response = await fetch(base + "/lms/lesson/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseId: process.argv[3] || 1,
        lessonId: process.argv[4] || 1,
      }),
    });
    const body = await response.json();
    console.log(body);
  },

  async resetCourse() {
    const response = await fetch(base + "/lms/course/reset", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseId: 1,
      }),
    });
    const body = await response.json();
    console.table(body);
  },

  async getCertificates() {
    const response = await fetch(base + `/lms/certificates`);
    const body = await response.json();
    console.log(body);
  },

  async getCertificate() {
    const response = await fetch(
      base + `/lms/certificates/${process.argv[3] || 1}`,
    );
    const body = await response.json();
    console.log(body);
  },

  async authLogin() {
    const response = await fetch(base + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "andre@example.com",
        password: "password123",
      }),
    });
    const body = await response.json();
    console.table(body);
  },

  async allLessons() {
    for (const lesson of lessons) {
      await functions.postLesson(lesson);
    }
  },

  async postBig() {
    const response = await fetch(base + "/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        big: "1".repeat(10 * 1024 * 1024), // 10MB
      },
      body: JSON.stringify("1".repeat(10 * 1024 * 1024)), // 10MB
    });
    const body = await response.json();
    console.log(body);
  },

  async attack() {
    for (let i = 0; i < 10; i++) {
      fetch(base + "/limite");
    }
  },
};

for (const user of users) {
  const obj = {
    ...user,
    password: user.password + "!Aa12345",
    email: user.email + "pinto",
    username: user.username + "pinto",
  }

  await functions.postUser(obj);
  await new Promise((resolve) => setTimeout(resolve, 100)); // Pequena pausa para evitar sobrecarga
}

if (process.argv[2]) {
  functions[process.argv[2]]();
}
