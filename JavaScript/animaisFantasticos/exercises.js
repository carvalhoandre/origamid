// Retorne no console todas as imagens do site
const allimages = document.querySelectorAll("img");

allimages.forEach((img, index) => {
  console.log(index + 1, img);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
allimages.forEach((img, index) => {
  if (img.src.includes("imagem")) console.log(index + 1, img);
});

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');

console.log("internalLinks", internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const subtitle = document.querySelector(".animais-descricao h2:first-child");

console.log("subtitle", subtitle);

// Selecione o último p do site
const lastP = document.querySelector("p:last-child");
console.log("lastP", lastP);

// Mostre no console cada parágrado do site
const paragraph = document.querySelectorAll("p");
paragraph.forEach((p, index) => console.log(`${index + 1}: ${p}`));

// Mostre o texto dos parágrafos no console
paragraph.forEach((p, index) =>
  console.log(`${index + 1} text: ${p.textContent}`)
);

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach((image) => {
  console.log(image);

  i++;
});

i = 0;

imgs.forEach((img) => {
  console.log(img);
  i++;
});

// Adicione a classe ativo a todos os itens do menu
const itemsMenu = document.querySelectorAll(".menu a");

itemsMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach(
  (item, index) => index !== 0 && item.classList.remove("ativo")
);

// Verifique se as imagens possuem o atributo alt
imgs.forEach((img) => {
  img.hasAttribute("alt")
    ? console.log("possui ALT")
    : console.log("não possui ALT");
});

// Modifique o href do link externo no menu
const externalLink = document.querySelector('a[href^="http"]');
externalLink.setAttribute("href", "./");

// Verifique a distância da primeira imagem
// em relação ao topo da página
const image = document.querySelector("img");
console.log(image.offsetTop);

// Retorne a soma da largura de todas as imagens
const images = document.querySelectorAll("img");
let sun = 0;
images.forEach((img) => (sun = sun + img.height));

console.log("sun", sun);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let have = true;

const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.height <= 48 || link.width <= 48) {
    have = false;
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
if (window.matchMedia("(max-width: 720px)")) {
  document.querySelector(".menu").classList.add("menu-mobile");
}

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const internalLink = document.querySelectorAll("a[href^='#']");

const handleClickLink = (event) => {
  event.preventDefault();

  internalLink.forEach((link) => {
    if (link.classList.contains("ativo")) {
      link.classList.remove("ativo");
    }
  });

  event.currentTarget.classList.add("ativo");
};

internalLink.forEach((link) => {
  link.addEventListener("click", handleClickLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelector("body");

body.childNodes.forEach((element) => {
  element.addEventListener("click", () => console.log(element));
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
body.childNodes.forEach((element) => {
  element.addEventListener("click", () => element.remove());
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
let fontSize = 12;
function handleKeyPress(event) {
  // Check if the pressed key is 't'
  if (event.key === "t" || event.key === "T") {
    fontSize = fontSize + 5;
    body.style.fontSize = `${fontSize}px`;
  }
}

document.addEventListener("keydown", handleKeyPress);

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const menuClone = menu.cloneNode(true);
const copy = document.querySelector(".copy");

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

const fac = document.querySelector(".fac");

const dt = fac.querySelector("dt");

// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animals = document.querySelector(".animais");
fac.innerHTML = animals;

// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
  (this.nome = nome),
    (this.idade = idade),
    (this.andar = function () {
      console.log(this.nome + " andou");
    });
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new pessoa("João", 20);
const bruno = new pessoa("Bruno", 15);
const maria = new pessoa("Maria", 25);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(selector) {
  this.element = document.querySelector(selector);

  this.addClass = function (classAdd) {
    this.element.classList.add(classAdd || "ativo");
  };
  this.removeClass = function (classAdd) {
    this.element.classList.remove(classAdd || "ativo");
  };
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function People(name, age, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

People.prototype.getFullName = function () {
  console.log(`${this.name} ${this.lastName}`);
};

const iam = new People("André", 25, "Carvalho");

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(Document.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
/* HTMLLIELEMENT */
li.click;
/* function */
li.innerText;
/* text */
li.value;
/* number */
li.hidden;
/* boolean */
li.offsetLeft;
/* number */
li.click();
/* undefined */

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
/* string */

// Liste 5 objetos nativos
// Object
// class
// null
// undefined
// Boolean

// Liste 5 objetos do browser
// Document
// NodeList
// window
// Element
// history

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
// webkitHidden
// webkitVisibilityState
