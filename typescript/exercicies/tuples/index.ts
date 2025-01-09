// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface ProductDetails {
  marca: string;
  cor: string;
}

type Sale = [string, number, string, ProductDetails];

function handleData(sales: Array<Sale>) {
  const sun = sales.reduce((acc, sale) => {
    const currentValue = sale[1];

    if (!!currentValue) return acc + currentValue;

    return acc;
  }, 0);

  document.body.innerHTML += `<p>Soma da venda: R$ ${sun}`;
}

async function fetchSaleData(): Promise<void> {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data: Array<Sale> = await response.json();

  handleData(data);
}

fetchSaleData();
