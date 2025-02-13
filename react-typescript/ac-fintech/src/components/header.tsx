import DateRange from "./dateRange";
import Months from "./months";

const Header = () => {
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
