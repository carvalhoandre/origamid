// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface Course {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: string;
  nome: string;
  tags: Array<string>;
}

function isCourse(value: unknown): value is Course {
  return (
    !!value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  );
}

function handleCourses(data: unknown) {
  if (!Array.isArray(data)) return;

  data.filter(isCourse).forEach((item) => {
    document.body.innerHTML += `
      <section>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(", ")}</p>
        <p>${item.horas}</p>
      </section>
    `;
  });
}

async function fetchCourses() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");

  if (!response) return;

  const json = await response.json();

  handleCourses(json);
}

fetchCourses();
