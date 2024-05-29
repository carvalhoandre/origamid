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
  console.log(style, title, style);
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
function perimeterOfSquare(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return console.log("Parametros enviados estão incorretos");
  }

  console.log(`A área do quadro é: ${a * b}`);
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
