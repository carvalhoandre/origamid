import React from "react";
import Card from "../card";

const ProductList = () => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  const onFetchProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const newItem = await response.json();
      setProducts(newItem);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    onFetchProducts();
  }, []);

  return products.length === 0 || loading ? (
    <p>Carregando...</p>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {products?.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export { ProductList };
