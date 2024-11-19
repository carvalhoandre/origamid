import React from "react";

import { fetchGetUser, fetchPostToken } from "../service/auth";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function getUser(token) {
    const response = await fetchGetUser(token);

    if (!response) return;

    const json = await response.json();
    window.localStorage.setItem("token", token);
    setData(json);
    setLogin(true);
  }

  async function userLogin({ userName, password }) {
    try {
      const response = await fetchPostToken({
        userName,
        password,
      });

      if (!response) return new Error();

      const json = await response.json();

      if (!json.token) return new Error();

      getUser();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
