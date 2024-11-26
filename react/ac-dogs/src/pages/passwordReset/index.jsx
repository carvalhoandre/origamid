import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";

import { PASSWORD_RESET } from "../../service/auth";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Error } from "../../components/error";
import { Head } from "../../components/head";

const PasswordReset = () => {
  const navigate = useNavigate();

  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");

  const { data, loading, error, request } = useFetch();

  const password = useForm("password");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!password.validate()) return;

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (!response.ok) return;

    password.onChange("");

    navigate("/login");
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />

      <h1 className="title">Resete a senha</h1>

      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            label="Nova senha"
            name="password"
            {...password}
          />

          <Button loading={loading}>Resetar</Button>

          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export { PasswordReset };
