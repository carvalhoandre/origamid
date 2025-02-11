import React from "react";
import { User, UserContextProps } from "./types";

import useFetch from "../hooks/useFetch";

const UserContext = React.createContext<UserContextProps | null>(null);

export const UseUser = () => {
  const context = React.useContext(UserContext);

  if (!context) throw new Error("UserContext deve estar dentro do Provider");

  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
