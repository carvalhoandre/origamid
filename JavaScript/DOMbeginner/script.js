/*  Aula 0301 - 0302 O Que é o Dom 1 e 2 */
// Retorne o url da página atual utilizando o objeto window
console.log("url da página:", window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const active = document.querySelector(".ativo");

console.log(active);

// Retorne a linguagem do navegador
console.log(window.navigator.language, window.navigator.languages);

// Retorne a largura da janela
console.log(window.outerWidth);
