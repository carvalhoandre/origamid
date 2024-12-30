interface Course {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: false;
  tags: Array<String>;
  idAulas: Array<number>;
  nivel: "avançado" | "iniciante";
}

function showData(courses: Array<Course>) {
  const body = document.querySelector("body");

  if (!body) return;

  courses.map((course: Course) => {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3 className={${
      course.nivel === "iniciante" ? ".blue" : ".red"
    }}>${course.nome}</h3><ul><li>${course.aulas}</li><li>${
      course.horas
    }</li><li>${course.gratuito}</li><li>${course.tags}</li><li>${
      course.nivel
    }</li></ul>`;

    body.appendChild(div);
  });
}

async function fetchData() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  showData(data);
}

fetchData();
