// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado

import Products from "./Products";
import Title from "./Title";

// Dica: const { pathname } = window.location; (puxa o caminho do URL)
// const produtos = [
//   { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
//   { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
// ];

const Components = () => {
  const isProducts = window.location.pathname.includes("produtos");

  if (isProducts) return <Products />;

  return (
    <div>
      <Title title="Home" />

      <p>Essa é a home do site</p>
    </div>
  );
};

export default Components;
