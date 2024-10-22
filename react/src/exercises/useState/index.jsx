// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from "react";
import Button from "./button";
import Item from "./item";

const itemsNames = ["tablet", "smartphone", "notebook"];

const ExerciseState = () => {
  const [loading, setLoading] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const handleOnClick = async (item) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${item}`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const newItem = await response.json();
      setItem(newItem);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {itemsNames.map((item, index) => (
          <Button key={index} item={item} handleClick={handleOnClick} />
        ))}
      </div>

      {loading ? <p>Carregando</p> : <Item item={item} />}
    </div>
  );
};

export default ExerciseState;
