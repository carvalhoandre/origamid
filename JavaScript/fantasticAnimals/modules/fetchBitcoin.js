export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(defaultError);
      }

      return response.json();
    })
    .then((data) => {
      const btcPrice = document.querySelector(target);
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
