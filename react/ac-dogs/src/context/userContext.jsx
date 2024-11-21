import React from "react";

import {
  fetchGetUser,
  fetchPostToken,
  fetchPostValidateToken,
} from "../service/auth";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function getUser(token) {
    const response = await fetchGetUser(token);

    if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

    const json = await response.json();

    window.localStorage.setItem("token", token);
    setData(json);
    setLogin(true);
  }

  async function userLogin({ username, password }) {
    try {
      setError(null);
      setLoading(true);

      const response = await fetchPostToken({ username, password });

      if (!response?.ok) throw new Error(`Erro: ${response.statusText}`);

      const json = await response.json();

      if (!json.token) throw new Error("Erro: Token inválido");

      await getUser(json.token);
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(async function () {
    setData(null);

    setError(null);
    setLoading(false);
    setLogin(false);

    window.localStorage.removeItem("token");
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      setError(null);

      const token = window.localStorage.getItem("token");
      if (!token) return setLogin(false);

      try {
        setError(null);
        setLoading(true);

        const response = await fetchPostValidateToken(token);

        if (!response.ok) throw new Error("Token inválido");

        await getUser(token);
      } catch (error) {
        setError(error.message);
        userLogout();
      } finally {
        setLoading(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ data, error, loading, login, userLogout, userLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
