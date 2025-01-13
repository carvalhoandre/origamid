export type TransactionPayment = "Boleto" | "Cartão de Crédito";
export type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

export interface TransactionApi {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransactionStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: string;
  ["Forma de Pagamento"]: TransactionPayment;
}

export interface Transaction {
  name: string;
  id: number;
  date: string;
  status: TransactionStatus;
  email: string;
  currency: string;
  value: number | null;
  paymentMethod: TransactionPayment;
  isNew: boolean;
}
