import { ISale } from "../context/types";

interface SaleItemProps {
  sale: ISale;
}

const SaleItem = ({ sale }: SaleItemProps) => {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>

      <span>{sale.nome}</span>
      <span>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );

};

export default SaleItem;
