import Statistics from "./types/Statistics";
import { CountList, Transaction, TransactionApi } from "./types/types";

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

function fillList(list: CountList, countainerId: string): void {
  const countainerElement = document.getElementById(countainerId);

  if (countainerElement) {
    Object.keys(list).forEach((key) => {
      countainerElement.innerHTML += `
        <p> ${key}: ${list[key]}</p>
      `;
    });
  }
}

function fillInStatistics(items: Array<Transaction>): void {
  const statistics = new Statistics(items);

  fillList(statistics.payment, "payment");
  fillList(statistics.status, "status");

  const sumElement = document.querySelector<HTMLElement>("#sum span");
  const dayElement = document.querySelector<HTMLElement>("#day span");

  if (sumElement) {
    sumElement.innerText = statistics.sum.toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
    });
  }

  if (dayElement) {
    dayElement.innerText = statistics.bestDay[0];
  }
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
