// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const JsxExercises = () => {
  const dados = [luana, mario];

  const sumShopping = (shopping) => {
    const sumPrices = shopping.reduce((acc, { preco }) => {
      return (acc = acc + parseFloat(preco.replace("R$ ", "")));
    }, 0);

    return sumPrices;
  };

  return (
    <div>
      {dados.map((item, key) => {
        const sumPrices = sumShopping(item.compras);

        return (
          <div key={key}>
            <h1>{`Nome: ${item.cliente}`}</h1>

            <p>{`Idade: ${item.idade}`}</p>

            <>
              {item.compras.map((compra, key) => (
                <ul key={key}>
                  <li>
                    <p>
                      {compra.nome}: {compra.preco}
                    </p>
                  </li>
                </ul>
              ))}
            </>

            <p style={{ color: `${item.ativa ? "red" : "green"}` }}>
              {`Situação: ${item.ativa ? "Ativa" : "Inativa"}`}
            </p>

            <p>{`Total gasto:  R$ ${sumPrices}`}</p>

            {sumPrices > 10000 && <p>A soma da compra é mais de R$ 10000</p>}
          </div>
        );
      })}
    </div>
  );
};

export default JsxExercises;
