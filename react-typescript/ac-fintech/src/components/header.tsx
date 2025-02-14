import React from "react";
import DateRange from "./dateRange";
import Months from "./months";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");

  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Resumo");
        document.title = "AC Fintech | Resumo";
        break;
      case "/sales":
        setTitle("Vendas");
        document.title = "AC Fintech | Vendas";
        break;
      default:
        setTitle("Resumo");
    }
  }, [location]);

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
