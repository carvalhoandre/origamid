import Title from "./Title";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

export default function Products() {
  return (
    <div>
      <Title title="Produtos" />

      {produtos.map((product, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #000",
            padding: "12px",
            marginBottom: "12px",
          }}
        >
          <p>{product.nome}</p>

          {product.propriedades.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
