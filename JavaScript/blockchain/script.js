const bitcoinValue = document.getElementById("bitcoin-value");
const errorSpan = document.getElementById("bitcoin-error");

let defaultError = "Erro ao buscar valor do bitcoin";

function displayValueBitcoin(data) {
  bitcoinValue.innerHTML = "";

  const value = data.BRL.last.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  bitcoinValue.textContent = `Valor atual é de: ${value}`;
}

function fetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      if (!response.ok) {
        throw new Error(defaultError);
      }

      return response.json();
    })
    .then((data) => {
      if (data.error) {
        throw new Error(defaultError);
      }

      displayValueBitcoin(data);
    })
    .catch((error) => {
      errorSpan.textContent = error.message;
    });
}

setInterval(fetchBitcoin, 30000);

fetchBitcoin();
