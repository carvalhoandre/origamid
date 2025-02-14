import React from "react";
import DateRange from "./dateRange";
import Months from "./months";

const Header = () => {
  const [title] = React.useState("Resumo")


  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />

        <h1 className="box bg-3">{title}</h1>
      </div>

      <Months />
    </header>
  );
};

export default Header;
