import React from "react";

export type IStatus = "pago" | "processando" | "falha";
export type IPayment = "boleto" | "pix" | "cartao";

export interface ISale {
  id: string;
  nome: string;
  preco: number;
  status: IStatus;
  pagamento: IPayment;
  parcelas: number | null;
  data: string;
}

export interface IDataContext {
  data: Array<ISale> | null;
  start: string;
  final: string;
  loading: boolean;
  error: string | null;
  setStart: React.Dispatch<React.SetStateAction<string>>
  setFinal: React.Dispatch<React.SetStateAction<string>>
}
