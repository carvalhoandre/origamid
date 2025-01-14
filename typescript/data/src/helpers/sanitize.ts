import { Transaction, TransactionApi } from "../types/types";
import currencyToNumber from "./currency";
import { stringToDate } from "./date";

export default function sanitizeTransaction(
  transaction: TransactionApi
): Transaction {
  return {
    name: transaction.Nome,
    id: transaction.ID,
    date: stringToDate(transaction.Data),
    status: transaction.Status,
    email: transaction.Email,
    currency: transaction["Valor (R$)"],
    value: currencyToNumber(transaction["Valor (R$)"]),
    paymentMethod: transaction["Forma de Pagamento"],
    isNew: Boolean(transaction["Cliente Novo"]),
  };
}
