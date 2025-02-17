import { ISaleDay } from "../@types/sales";
import { ISale } from "../context/types";

export default function transformData(sales: Array<ISale>): Array<ISaleDay> {
  const days = sales.reduce((acc: { [key: string]: ISaleDay }, sale) => {
    const day = sale.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }

    acc[day][sale.status] += sale.preco;

    return acc;
  }, {});

  return Object.values(days);
}
