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
  loading: boolean;
  error: string | null;
}
