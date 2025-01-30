import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [sum, setSum] = React.useState(0);

  return (
    <div>
      <div>
        <Input label="testando..." />
      </div>

      <p>Total: {sum}</p>

      <Button sum={sum} setSum={setSum} />
    </div>
  );
}

export default App;
