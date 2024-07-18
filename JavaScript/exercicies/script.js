// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll("p");
const sun = Array.from(paragraphs).reduce((acc, p) => {
  if (p.innerText.length) return acc + p.innerText.length;

  return acc;
}, 0);

console.log("soma total de caracteres dos parágrafos:", sun);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function creatElement(elementTag, elementClass, elementContent) {
  const newElement = document.createElement(elementTag);

  if (elementClass) newElement.classList.add(elementClass);

  if (elementContent) newElement.innerHTML = elementContent;

  return newElement;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const createTitle = creatElement.bind(null, "h1", "titulo");

console.log(createTitle("olá"));

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
for (let i = 0; i <= 20; i++) {
  setTimeout(function () {
    this.document.body.style.background = i % 2 === 0 ? "#1E90FF" : "#ec5353";
  }, 2000 * i);
}

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
