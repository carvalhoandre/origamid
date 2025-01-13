import { TransactionApi } from "./types/types";
import fetchData from "./fetchData";
import sanitizeTransaction from "./helpers/sanitize";

async function handleData() {
  const data = await fetchData<Array<TransactionApi>>(
    "https://api.origamid.dev/json/transacoes.json?"
  );

  if (!data) return;

  const transactions = data.map(sanitizeTransaction);

  console.log(transactions);
}

handleData();
