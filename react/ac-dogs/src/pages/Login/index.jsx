import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { UserContext } from "../../context/userContext";

import { Head } from "../../components/head";
import { Input } from "../../components/input";
import { Error } from "../../components/error";
import { Button } from "../../components/button";

import styles from "./styles.module.css";
import stylesBtn from "../../components/button/styles.module.css";

const Login = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);

  const userName = useForm();
  const password = useForm();

  const isValid = !(
    password.value?.trim()?.length > 2 && userName.value?.trim()?.length > 2
  );

  async function handleSubmit(event) {
    event.preventDefault();

    userLogin({
      username: userName.value,
      password: password.value,
    });
  }

  return (
    <section className={`animeLeft ${styles.container}`}>
      <Head title="Login" />

      <h1 className="title">Login</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input type="text" label="Usuário" name="userName" {...userName} />

        <Input type="password" name="password" label="Senha" {...password} />

        {loading ? (
          <Button type="submit" disabled>
            Carregando...
          </Button>
        ) : (
          <Button type="submit" disabled={isValid}>
            Entrar
          </Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.lost} to="password-recovery">
        Esqueci minha senha
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}> Cadastre-se</h2>

        <p>Ainda não possui conta? Cadastre-se agora!</p>

        <Link className={stylesBtn.button} to="register">
          Criar conta
        </Link>
      </div>
    </section>
  );
};

export { Login };
