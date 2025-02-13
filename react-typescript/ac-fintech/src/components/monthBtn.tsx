import { UseData } from "../context/dataContext";
import { formatDate, getNameMonth } from "../helpers/date";

const styles: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const MonthBtn = ({ n }: { n: number }) => {
    const {setStart, setFinal} = UseData()

    const setMonth = () => {
        const date = new Date();
        date.setMonth(date.getMonth() + n);

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    
        setStart(formatDate(firstDay))
        setFinal(formatDate(lastDay))
    }

  return <button style={styles} onClick={setMonth}>{getNameMonth(n)}</button>;
};

export default MonthBtn;
