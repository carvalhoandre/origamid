// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const JsxArray = () => {
  const productsFilterd = produtos.filter(
    (product) => parseFloat(product.preco.replace("R$ ", " ")) > 1500
  );

  return (
    <section>
      {productsFilterd.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.nome}</h1>

            <p>Preço: {product.preco}</p>

            <div>
              {product.cores.map((color, index) => (
                <div
                  key={index}
                  style={{ background: color, marginLeft: "42px" }}
                >
                  <p style={{ color: "#FFF" }}>{color}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default JsxArray;
