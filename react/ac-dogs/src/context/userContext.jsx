import React from "react";
import { useNavigate } from "react-router-dom";

import {
  fetchGetUser,
  fetchPostToken,
  fetchPostValidateToken,
} from "../service/auth";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();

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

  async function userLogin({ userName, password }) {
    try {
      setError(null);
      setLoading(true);

      const response = await fetchPostToken({
        userName,
        password,
      });

      if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

      const json = await response.json();

      if (!json.token) throw new Error("Erro: Token inválido");

      await getUser();
    } catch (error) {
      setError(error.message);
    } finally {
      setLogin(false);
    }
  }

  const userLogout = React.useCallback(
    async function () {
      setData(null);

      setError(null);
      setLoading(false);
      setLogin(false);

      window.localStorage.removeItem("token");

      navigate("/login");
    },
    [navigate]
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (!token.length > 0) return;

      try {
        setError(null);
        setLoading(true);

        const response = await fetchPostValidateToken(token);

        if (!response.ok) throw new Error("Token inválido");

        await getUser(token);
      } catch (error) {
        setError(error);

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
