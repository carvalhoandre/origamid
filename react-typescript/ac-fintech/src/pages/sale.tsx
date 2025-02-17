import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { ISale } from "../context/types";

import Loading from "../components/loading";

type SaleResume = Omit<ISale, 'data'>

const Sale = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<SaleResume>(`https://data.origamid.dev/vendas/${id}`);

  if (!data) return <></>;
  
  if (!loading) return <Loading />;

  return (
    <div>
      <div className="box mb">
        <p>ID: {data.id}</p>
      </div>
      <div className="box mb">
        <p>Nome: {data.nome}</p>
      </div>
      <div className="box mb">
        <p>
          Preço:
          {data.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className="box mb">
        <p>Status: {data.status}</p>
      </div>
      <div className="box mb">
        <p>Pagamento: {data.pagamento}</p>
      </div>
    </div>
  );
};

export default Sale;
