import { Transaction, TransactionValue } from "./types";

import countBy from "../helpers/countBy";

function filterValue(
  transaction: Transaction
): transaction is TransactionValue {
  return transaction.value !== null;
}

export default class Statistics {
  private transactions;
  sum;
  payment;
  status;

  constructor(transactions: Array<Transaction>) {
    this.transactions = transactions;
    this.sum = this.setSum();
    this.payment = this.setPayment();
    this.status = this.setStatus();
  }

  private setSum(): number {
    return this.transactions.filter(filterValue).reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  }

  private setPayment() {
    return countBy(this.transactions.map(({ paymentMethod }) => paymentMethod));
  }

  private setStatus() {
    return countBy(this.transactions.map(({ status }) => status));
  }
}
