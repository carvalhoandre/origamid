function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

const input = document.querySelector("input");

const total = localStorage.getItem("total");

if (input) {
  input.value = total ?? "";
  calcularGanho(Number(input?.value));

  function calcularGanho(value: number) {
    const p = document.querySelector("p");

    if (p) p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }

  function totalMudou() {
    const value = Number(input?.value);

    if (value) {
      localStorage.setItem("total", value.toString());
      calcularGanho(value);
    }
  }

  input.addEventListener("keyup", totalMudou);
}

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === "number") return value;

  if (value === "string") return Number(value);

  throw "value deve ser um número ou uma string";
}
