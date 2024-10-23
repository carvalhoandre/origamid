// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

import React from "react";
import Input from "./input";

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // form é o objeto com os dados do formulário
//     body: JSON.stringify(form),
//   });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const Form = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState(null);

  const handleOnChange = ({ target }) => {
    const { value, id } = target;

    setForm({ ...form, [id]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const request = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!request.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const response = await request.json();

      setId(response.ID);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Enviando...</p>;

  return (
    <>
      <h1>Origamid form</h1>

      <form onSubmit={handleOnSubmit}>
        <Input value={form.nome} name={"nome"} onChange={handleOnChange} />
        <Input
          value={form.email}
          name="email"
          onChange={handleOnChange}
          type="email"
        />
        <Input
          value={form.senha}
          name="senha"
          onChange={handleOnChange}
          type="password"
        />
        <Input value={form.cep} name="cep" onChange={handleOnChange} />
        <Input value={form.rua} name="rua" onChange={handleOnChange} />
        <Input
          value={form.numero}
          name="numero"
          onChange={handleOnChange}
          type="number"
        />
        <Input value={form.bairro} name="bairro" onChange={handleOnChange} />
        <Input value={form.cidade} name="cidade" onChange={handleOnChange} />
        <Input value={form.estado} name="estado" onChange={handleOnChange} />

        {id && (
          <p style={{ marginTop: "1.5rem" }}>
            Parabéns pelo cadastro! seu Id é {id}{" "}
          </p>
        )}

        <button type="submit" style={{ marginTop: "1.5rem" }}>
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
