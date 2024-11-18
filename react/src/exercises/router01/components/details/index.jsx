import React from "react";
import { useParams } from "react-router-dom";

import Resume from "../resume";

const ProductDetails = () => {
  const params = useParams();

  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState();

  const onFetchProduct = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const newItem = await response.json();

      setProduct(newItem);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    onFetchProduct();
  }, []);

  return loading ? <p>Carregando...</p> : <Resume product={product} />;
};

export { ProductDetails };
