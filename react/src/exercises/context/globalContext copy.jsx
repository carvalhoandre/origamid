import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  const onFetchProduct = async (item = "smartphone") => {
    setLoading(true);

    try {
      if (item === product?.id) return;

      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${item}`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const newItem = await response.json();
      setProduct(newItem);

      window.localStorage.setItem("produto", JSON.stringify(newItem));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const limparDados = () => {
    setProduct(null);
    window.localStorage.removeItem("produto");
  };

  React.useEffect(() => {
    const storageItem = window.localStorage.getItem("produto");

    if (storageItem) {
      setProduct(JSON.parse(storageItem));
    } else {
      onFetchProduct();
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ product, loading, onFetchProduct, limparDados }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
