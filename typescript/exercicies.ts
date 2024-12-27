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

// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
interface Interprise {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Interprise;
  empresaMontadora: Interprise;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data) {
  document.body.innerHTML = `
    <div>
      <h2>${data.name}</h2>
    </div>
  `;
}
