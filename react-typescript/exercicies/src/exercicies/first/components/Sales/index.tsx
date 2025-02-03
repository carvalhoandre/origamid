import { SalesProps } from "./types";

const ShowingSales = ({ sales }: SalesProps) => {
  return sales.map((sale) => (
    <div>
      <h2>
        {sale.nome} #{sale.id}
      </h2>

      <p>{`Data: ${sale.data}`}</p>
      <p>{`Pagamento: ${sale.pagamento}`}</p>
      <p>{sale.parcelas && `Parcelas: ${sale.parcelas}`}</p>
      <p>{`Preco: ${sale.preco}`}</p>
      <p>{`Status: ${sale.status}`}</p>
    </div>
  ));
};

export default ShowingSales;
