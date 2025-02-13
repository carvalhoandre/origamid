// import { UseData } from "../context/dataContext";
import DateRange from "./dateRange";
import Months from "./Months";

const Header = () => {
  // const { data } = UseData();

  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>

      <Months />
    </header>
  );
};

export default Header;
