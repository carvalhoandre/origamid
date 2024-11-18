import { useNavigate } from "react-router-dom";

const Resume = (props) => {
  const navigate = useNavigate();

  const product = props.product;

  if (!product) return <></>;

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        maxWidth: "50%",
        margin: "0 auto",
      }}
      onClick={() => navigate(`details/${product.id}`)}
    >
      {product.fotos[0] && (
        <img
          src={product.fotos[0].src}
          alt={product.fotos[0].titulo}
          style={{
            borderRadius: "15px",
            display: "block",
            width: "350px",
            height: "350px",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          flexDirection: "column",
        }}
      >
        <h1>{product.nome}</h1>

        <h2
          style={{
            padding: "0.5rem 1rem",
            background: "#86fa5b",
            borderRadius: "5px",
            width: "fit-content",
            fontSize: "1rem",
          }}
        >
          R$ {product.preco}
        </h2>

        <p>{product.descricao}</p>
      </div>
    </div>
  );
};

export default Resume;
