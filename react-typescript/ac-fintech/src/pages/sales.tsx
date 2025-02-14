import SaleItem from "../components/saleItem";
import { UseData } from "../context/dataContext";

const Sales = () => {
  const { data } = UseData();

  if (!data) return <></>;

  return (
    <ul>
      {data.map((sale, index) => (
        <li key={sale.id + index}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
