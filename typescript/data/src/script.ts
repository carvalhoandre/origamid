import Statistics from "./types/Statistics";
import { Transaction, TransactionApi } from "./types/types";

import fetchData from "./fetchData";

import sanitizeTransaction from "./helpers/sanitize";

function fillTable(items: Array<Transaction>): void {
  const table = document.querySelector("#transactions tbody");

  if (!table) return;

  items.forEach((item) => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>R$ ${item.currency}</td>
        <td>${item.paymentMethod}</td>
        <td>${item.status}</td>
      </tr>
    `;
  });
}

function fillInStatistics(items: Array<Transaction>): void {
  const statistics = new Statistics(items);

  const sumElement = document.querySelector<HTMLElement>("#sum span");

  if (!sumElement) return;

  sumElement.innerText = statistics.sum.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
}

async function handleData() {
  const data = await fetchData<Array<TransactionApi>>(
    "https://api.origamid.dev/json/transacoes.json?"
  );

  if (!data) return;

  const transactions = data.map(sanitizeTransaction);

  fillTable(transactions);

  fillInStatistics(transactions);
}

handleData();
