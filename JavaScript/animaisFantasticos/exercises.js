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
