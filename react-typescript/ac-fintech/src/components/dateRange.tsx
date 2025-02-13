import DateInput from "./dateInput";
import { UseData } from "../context/dataContext";

const DateRange = () => {
  const {start, final, setFinal, setStart} = UseData();

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
