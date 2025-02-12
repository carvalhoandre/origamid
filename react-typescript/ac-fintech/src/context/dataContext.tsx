import React from "react";
import useFetch from "../hooks/useFetch";

import { IDataContext, ISale } from "./types";

const DataContext = React.createContext<IDataContext | null>(null);

export const UseData = () => {
  const context = React.useContext(DataContext);

  if (!context) throw new Error("useData precisa estar em DataContextProvider");

  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<Array<ISale>>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
