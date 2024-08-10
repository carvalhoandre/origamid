export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      if (!response.ok) {
        throw new Error(defaultError);
      }

      return response.json();
    })
    .then((data) => {
      const btcPrice = document.querySelector(".btc-price");
      const realFromBitcoin = data.BRL.sell / 1000;

      const value = realFromBitcoin.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      btcPrice.innerText = value;
    })
    .catch((error) => {
      console.warn(error);
    });
}
