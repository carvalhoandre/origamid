import { Transaction, TransactionValue } from "./types";

function filterValue(
  transaction: Transaction
): transaction is TransactionValue {
  return transaction.value !== null;
}

export default class Statistics {
  private transactions;
  sum;

  constructor(transactions: Array<Transaction>) {
    this.transactions = transactions;
    this.sum = this.setSum();
  }

  private setSum(): number {
    return this.transactions.filter(filterValue).reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  }
}
