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
  week;
  status;
  payment;
  bestDay;

  constructor(transactions: Array<Transaction>) {
    this.transactions = transactions;

    this.sum = this.setSum();
    this.week = this.setWeek();
    this.status = this.setStatus();
    this.payment = this.setPayment();
    this.bestDay = this.setBestDay();
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

  private setWeek() {
    const week = {
      ["Domingo"]: 0,
      ["Segunda-feira"]: 0,
      ["Terça-feira"]: 0,
      ["Quarta-feira"]: 0,
      ["Quinta-feira"]: 0,
      ["Sexta-feira"]: 0,
      ["Sábado"]: 0,
    };

    for (let i = 0; i < this.transactions.length; i++) {
      const day = this.transactions[i].date.getDay();

      if (day === 0) week["Domingo"] += 1;
      if (day === 1) week["Segunda-feira"] += 1;
      if (day === 2) week["Terça-feira"] += 1;
      if (day === 3) week["Quarta-feira"] += 1;
      if (day === 4) week["Quinta-feira"] += 1;
      if (day === 5) week["Sexta-feira"] += 1;
      if (day === 6) week["Sábado"] += 1;
    }

    return week;
  }

  private setBestDay() {
    return Object.entries(this.week).sort((a, b) => b[1] - a[1])[0];
  }
}
