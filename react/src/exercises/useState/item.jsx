const Item = (props) => {
  const item = props.item;

  if (!item) return <></>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>{item.nome}</h1>

      <p>R$ {item.preco}</p>

      {item.fotos[0] && (
        <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
      )}
    </div>
  );
};

export default Item;
