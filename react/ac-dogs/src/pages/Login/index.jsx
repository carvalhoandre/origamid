import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { authLogin } from "../../service/auth";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  const userName = useForm("email");
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (!userName.validate() || !password.validate()) return;

    authLogin(userName.value, password.value);
  }

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
