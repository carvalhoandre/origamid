/* aula 01 - exercicios */
var name = "André";
var age = 25;
var food;
food = "Lasanha";
var one;
var two;
var three;
var four;
var five;

/* aula 02: tipos de dados - exercicios */
var exec = "";
var noNumber = "02";
var age = 25;
var name = "André";
var lastName = "Carvalho";
var fullName = name + lastName;
var time = "It's time";
console.log(typeof name);

/* aula 03 - 04: números e operadores - exercicios */
var total = 10 + (5 * 2) / 2 + 20;
console.log("total", total);
var nan;
var nanTwo;
console.log(isNaN(nan), isNaN(nanTwo));
var sun = parseInt("200") + 50;
console.log("sun", sun);
var increment = 0;
console.log(increment++);

var numero = "80";
var unidade = "kg";
var peso = numero + unidade;
var pesoPorDois = parseInt(numero) / 2 + unidade;
console.log(pesoPorDois);

/* aula 05 - 06: boolean e condições - exercicios */
// Verifique se a sua idade é maior do que a de algum parente
var myAge = 25;
var motherAge = 60;

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (myAge > motherAge) {
  console.log("É maior");
} else if (myAge === motherAge) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log("expressao", expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  "nome",
  !!nome,
  "idade",
  !!idade,
  "possuiDoutorado",
  !!possuiDoutorado,
  "empregoFuturo",
  !!empregoFuturo,
  "dinheiroNaConta",
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("brasil");
} else {
  console.log("china");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

/* aula 07 - 08 - 09: funções - exercicios */
// Crie uma função para verificar se um valor é Truthy

function title(title) {
  var style = "-" * 10;
  console.log(style, title.toLocaleUpperCase(), style);
}
title("FUNCOES");

function isTruthy(value) {
  if (value === true) {
    console.log("O valor é verdadeiro");
  } else {
    console.log("O valor não é verdadeiro");
  }
}

isTruthy(true);
isTruthy(false);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeterOfSquare(side) {
  if (typeof side !== "number") {
    return console.log("Parametros enviados estão incorretos");
  }

  console.log(`A área do quadro é: ${side * side}`);
}

perimeterOfSquare(2, 4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function showFullName(name, lastName) {
  if (typeof name !== "string" || typeof lastName !== "string") {
    return console.log("Parametros enviados estão incorretos");
  }

  console.log(`${name} ${lastName}`);
}

showFullName("André", "Carvalho");

// Crie uma função que verifica se um número é par
function isEvenNumber(a) {
  if (typeof a !== "number") {
    return console.log("Parametros enviados estão incorretos");
  }

  if (a % 2 !== 0) {
    console.log(`O número ${a}: é impar`);
  } else {
    console.log(`O número ${a}: é par`);
  }
}

isEvenNumber(8);
isEvenNumber(777);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function getTypeof(param) {
  console.log(typeof param);
}

getTypeof("a");
getTypeof(4);
getTypeof(true);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log(`André`);
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

/* aula 10 - 11: objetos - exercicios */
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var iam = {
  name: "André",
  lastName: "Carvalho",
  age: 25,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
iam.show = function () {
  console.log(`My name is: ${this.name} ${this.lastName}`);
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
  breed: "labrador",
  age: 10,
  color: "black",
  barks: function (see) {
    if (see === "man") {
      console.log("BARKS!");
    }
  },
};

/* aula 12: tudo é objeto - exercicios */
title("tudo é objeto");
// nomeie 3 propriedades ou métodos de strings
var lengh = nome.length;
var replace = nome.replace(`é`, "e");
var upperCase = nome.toLocaleUpperCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
var button = document.querySelector(".button");
//appendChild
//addEventListener
//scroll
//ariaLabel
// remove

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// var clipboard = new ClipboardJS(".btn");

// clipboard.on("success", function (e) {
//   console.info("Action:", e.action);
//   console.info("Text:", e.text);
//   console.info("Trigger:", e.trigger);

//   e.clearSelection();
// });

/* aulas 13 - 14: Arrays e Loops - exercicios */
title("tudo é objeto");

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var array = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (year = 0; year < array.length; year++) {
  console.log(`O brasil ganhou a copa de ${array[year]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if (frutas[i] === "Pera") break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var lastFruit = frutas[frutas.length - 1];
console.log("a última fruta:", lastFruit);

/* aula 15:  Atribuição e Ternário - exercicios */
title("Atribuição e Ternário");
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;

console.log(darCredito, scroll);

/* aula 16:  Escopo */
title("Escopo");

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas);

/* porque var é a palavra reservada para declaracao logo nao posso dar console log e tanto a const e a let estao sendo acessadas fora do escopo */

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}

somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const newTotal = 10 * numero;
console.log("newTotal", newTotal);
