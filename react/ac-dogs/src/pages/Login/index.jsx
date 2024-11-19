import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { authLogin } from "../../service/auth";

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
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      <Link to="register">Criar conta</Link>
    </div>
  );
};

export { Login };
