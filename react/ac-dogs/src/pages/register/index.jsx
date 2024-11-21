import React from "react";

import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import { UserContext } from "../../context/userContext";

import { USER_POST } from "../../service/api";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Error } from "../../components/Error";

import styles from "./styles.module.css";

const Register = () => {
  const { loading, error, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className={`animeLeft `}>
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="userName" {...username} />

        <Input label="Email" type="text" name="email" {...email} />

        <Input type="password" name="password" label="Senha" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export { Register };
