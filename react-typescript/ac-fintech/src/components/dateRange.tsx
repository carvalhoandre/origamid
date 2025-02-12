import React from "react";
import DateInput from "./dateInput";

const DateRange = () => {
  const [start, setStart] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
