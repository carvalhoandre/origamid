const buttonCep = document.getElementById("cep-submit");
const inputCep = document.getElementById("cep-input");
const formCep = document.getElementById("cep-form");
const sectionCep = document.getElementById("section-cep");
const cepResult = document.getElementById("cep-result");
const errorSpan = document.getElementById("cep-error");

let cep;

function displayCepData(data) {
  Object.keys(data).forEach((key) => {
    const span = document.createElement("span");
    span.textContent = `${key}: ${data[key]}`;
    cepResult.appendChild(span);
  });
}

function onCepSubmit(event) {
  event.preventDefault();

  cepResult.innerHTML = "";
  errorSpan.textContent = "";

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar o CEP");
      }
      return response.json();
    })
    .then((data) => {
      if (data.erro) {
        errorSpan.textContent = "CEP não encontrado!";
      } else {
        displayCepData(data);
      }
    })
    .catch((error) => {
      errorSpan.textContent = error.message;
    });
}

function handleInputChange(event) {
  cep = event.target.value.replace(/\D/g, "");

  if (cep.length >= 8) {
    buttonCep.disabled = false;
  } else {
    buttonCep.disabled = true;
    errorSpan.textContent = "CEP deve conter 8 dígitos.";
  }
}

function handleKeyUp(event) {
  if (!event.target.validity.valid) {
    errorSpan.textContent = event.target.validationMessage;
  } else {
    errorSpan.textContent = "";
  }
}

inputCep.addEventListener("input", handleInputChange);
inputCep.addEventListener("keyup", handleKeyUp);
formCep.addEventListener("submit", onCepSubmit);
