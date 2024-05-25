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
