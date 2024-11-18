import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const stylesButton = {
    background: "#ECECEC",
    padding: "10px 15px",
    borderRadius: "5px",
    color: "#1C1C1C",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <button style={stylesButton} onClick={() => navigate("/")}>
        Produtos
      </button>

      <button style={stylesButton} onClick={() => navigate("/contact")}>
        Contato
      </button>
    </div>
  );
};

export { Header };
