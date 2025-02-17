import { NavLink } from "react-router-dom";

import { ISale } from "../context/types";

interface SaleItemProps {
  sale: ISale;
}

const SaleItem = ({ sale }: SaleItemProps) => {
  return (
    <div className="sale box">
      <NavLink to={`/sales/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>

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
