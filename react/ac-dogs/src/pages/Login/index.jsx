import React from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useForm } from "../../hooks/useForm";

import styles from "./styles.module.css";

const Login = () => {
  const { userLogin } = React.useContext(UserContext);

  const userName = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!userName.validate() || !password.validate()) return new Error();

    userLogin({
      userName: userName.value,
      password: password.value,
    });
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
