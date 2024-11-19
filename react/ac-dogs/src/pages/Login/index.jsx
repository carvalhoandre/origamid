import React from "react";
import { Link } from "react-router-dom";

import { postToken, getUser } from "../../service/auth";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useForm } from "../../hooks/useForm";

import styles from "./styles.module.css";

const Login = () => {
  const userName = useForm();
  const password = useForm();

  async function handleFetchUser(token) {
    const response = await getUser(token);

    if (!response) return;

    const json = await response.json();
    console.log(json);
    window.localStorage.setItem("token", token);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!userName.validate() || !password.validate()) return new Error();

      const response = await postToken({
        userName: userName.value,
        password: password.value,
      });

      if (!response) return new Error();

      const json = await response.json();

      if (!json.token) return new Error();

      handleFetchUser(json.token);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem("toke");

    if (token) getUser(token);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="userName" {...userName} />

        <Input type="password" name="password" label="Senha" {...password} />

        <Button type="submit">Entrar</Button>
      </form>

      <Link to="register">Criar conta</Link>
    </div>
  );
};

export { Login };
