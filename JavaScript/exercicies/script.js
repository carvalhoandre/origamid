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

// Remova o erro
priceNumber("R$ 99,99");
function priceNumber(n) {
  return +n.replace("R$", "").replace(",", ".");
}

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  var test = "IIFE";

  console.log(test);
})();

// console.log(test);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(() => console.log("callback"));

// Extraia o backgroundColor, color e margin do btn

const getComputedStyle = ({ style }) => {};

const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

// const { backgroundColor, color, margin } = btnStyles;

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

const { cor: bobCor } = cachorro;

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color = "red") {
  const buttonElement = document.createElement("button");

  buttonElement.style.background = background;
  buttonElement.style.color = color;

  return buttonElement;
}

const redButton = createButton("#FFF", "#000");

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];

comidas.push(frutas);
