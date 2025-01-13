import fetchData from "./fetchData";

type TransactionPayment = "Boleto" | "Cartão de Crédito";
type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

interface TransactionApi {
  Nome: string;
  ID: number;
  Data: string;
  Status: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: string;
  ["Forma de Pagamento"]: TransactionPayment;
}

async function handleData() {
  const data = await fetchData<TransactionApi>(
    "https://api.origamid.dev/json/transacoes.json"
  );

  if (!data) return;

  data.forEach((item) => {});
}

handleData();
