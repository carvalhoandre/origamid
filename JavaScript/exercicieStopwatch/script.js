// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

let time = 0;

const timeValue = document.querySelector("[data-time]");

function handleStart() {
  timeValue.textContent = time++;
}

const buttonStart = document.querySelector("[data-start]");

let handleTime;

buttonStart.addEventListener("click", () => {
  handleTime = setInterval(handleStart, 500);
});

const buttonPause = document.querySelector("[data-pause]");

buttonPause.addEventListener("click", () => {
  clearInterval(handleTime);
});

const buttonReset = document.querySelector("[data-restart]");

buttonReset.addEventListener("click", () => {
  time = 0;
});
