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
