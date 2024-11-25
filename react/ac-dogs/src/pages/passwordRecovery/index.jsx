import React from "react";

import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import { UserContext } from "../../context/userContext";

import { LOST_PASSWORD } from "../../service/auth";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Error } from "../../components/error";

const PasswordRecovery = () => {
  const { data, loading, error, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  const login = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!login.validate()) return;

    const { url, options } = LOST_PASSWORD({
      login: login.value,
      url: window.location.href.replace("recovery", "reset"),
    });

    const { response } = await request(url, options);

    if (response.ok) login.onChange("");
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>

      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Email / Usuário"
            name="userName"
            {...login}
          />

          <Button loading={loading}>Enviar email</Button>

          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export { PasswordRecovery };
