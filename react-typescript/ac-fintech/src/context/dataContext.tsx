import React from "react";
import useFetch from "../hooks/useFetch";

import { IDataContext, ISale } from "./types";
import { getDateBySearch } from "../helpers/date";

const DataContext = React.createContext<IDataContext | null>(null);

export const UseData = () => {
  const context = React.useContext(DataContext);

  if (!context) throw new Error("useData precisa estar em DataContextProvider");

  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [start, setStart] = React.useState(getDateBySearch(30));
  const [final, setFinal] = React.useState(getDateBySearch());

  const { data, loading, error } = useFetch<Array<ISale>>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${final}`
  );

  return (
    <DataContext.Provider value={{ data, loading, error, start, setStart, final, setFinal  }}>
      {children}
    </DataContext.Provider>
  );
};
