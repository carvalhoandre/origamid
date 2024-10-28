// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const Checkbox = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }
  return (
    <div>
      <h1>Checkbox Origamid</h1>

      {coresArray.map((color, index) => (
        <label key={index + color}>
          <input
            type="checkbox"
            value={color}
            checked={handleChecked(color)}
            onChange={handleChange}
          />
          <p>{color}</p>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
