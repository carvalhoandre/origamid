// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React from "react";
import Button from "../useState/button";
import Item from "../useState/item";

const itemsNames = ["smartphone", "notebook"];

const ExerciseEffect = () => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  const handleFethProduct = async (item) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${item}`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const newItem = await response.json();
      setProduct(newItem);

      window.localStorage.setItem("produto", newItem);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const storageItem = window.localStorage.getItem("produto");

    if (storageItem) setProduct(storageItem);
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {itemsNames.map((item, index) => (
          <Button key={index} item={item} handleClick={handleFethProduct} />
        ))}
      </div>

      {loading ? <p>Carregando</p> : <Item item={product} />}
    </div>
  );
};

export default ExerciseEffect;
