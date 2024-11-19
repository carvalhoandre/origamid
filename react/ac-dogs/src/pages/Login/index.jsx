import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { authLogin } from "../../service/auth";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

const Login = () => {
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();

  function handleSubmit(event) {
    event.preventDefault();

    authLogin(userName, password);
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Usuário"
          name="userName"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

        <Input
          type="password"
          name="password"
          label="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button type="submit">Entrar</Button>
      </form>

      <Link to="register">Criar conta</Link>
    </div>
  );
};

export { Login };
