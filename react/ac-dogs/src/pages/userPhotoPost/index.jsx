import React from "react";

import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";

import { PHOTO_POST } from "../../service/photos";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Error } from "../../components/Error";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  const name = useForm();
  const age = useForm("number");
  const weight = useForm("number");

  const [img, setImg] = React.useState({});

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST({ formData, token });

    request(url, options);
  }

  React.useEffect(() => {
    if (data) navigate("account");
  }, [data]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="Peso" type="number" name="peso" {...weight} />
        <Input label="Idade" type="number" name="idade" {...age} />

        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        <Button loading={loading}>Enviar</Button>

        <Error error={error} />
      </form>

      {img?.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export { UserPhotoPost };
