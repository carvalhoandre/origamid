import React from "react";

import { useForm } from "../../hooks/useForm";
import { UserContext } from "../../context/userContext";

import { fetchPostUser } from "../../service/auth";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Error } from "../../components/Error";

import styles from "./styles.module.css";

const Register = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);

  const userName = useForm();
  const email = useForm("email");
  const password = useForm("password");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetchPostUser({
        username: userName.value,
        email: email.value,
        password: password.value,
      });

      if (!response?.ok) throw new Error(`Erro: ${response.statusText}`);

      await userLogin({ username: userName.value, password: password.value });
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={`animeLeft `}>
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="userName" {...userName} />

        <Input label="Email" type="text" name="email" {...email} />

        <Input type="password" name="password" label="Senha" {...password} />

        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export { Register };
