import React from "react";
import Button from "../useState/button";
import Item from "../useState/item";
import { GlobalContext } from "./productsContext";

const itemsNames = ["smartphone", "notebook"];

const ExerciseContext = () => {
  const global = React.useContext(GlobalContext);

  if (!global) {
    return <p>Context not available</p>;
  }

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {itemsNames.map((item, index) => (
          <Button key={index} item={item} handleClick={global.onFetchProduct} />
        ))}
        <button onClick={global.limparDados}>Limpar Dados</button>{" "}
      </div>

      {global.loading ? <p>Carregando...</p> : <Item item={global.product} />}
    </div>
  );
};

export default ExerciseContext;
