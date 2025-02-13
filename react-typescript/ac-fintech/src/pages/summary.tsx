import { UseData } from "../context/dataContext";

const Summary = () => {
  const { data } = UseData();

  if (!data) return <></>;

  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
            <h2>Vendas</h2>
            <p>
              {data.filter((i) => i.status !== 'falha')
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
            </p>
        </div>
        
        <div className="box">
            <h2>Recebido</h2>
            <p>
              {data.filter((i) => i.status === 'pago')
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
            </p>
        </div>
        <div className="box">
            <h2>Processando</h2>
            <p>
              {data.filter((i) => i.status === 'processando')
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
            </p>
        </div>
      </div>

      <div className="box">Gráficos</div>
    </section>
  );
};

export default Summary;
