import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const product = props.product;

  if (!product) return <></>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        cursor: "pointer",
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
            width: "100%",
          }}
        />
      )}

      <p>{product.nome}</p>
    </div>
  );
};

export default Card;
