import React from "react";

import Send from "../../assets/enviar.svg?react";

import { Error } from "../error";
import { useFetch } from "../../hooks/useFetch";
import { PHOTO_DELTE } from "../../service/photos";

import styles from "./styles.module.css";

const PhotosDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleOnClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar essa foto?");

    if (!confirm) return;

    const { options, url } = PHOTO_DELTE(id);

    const { response } = await request(url, options);

    if (response.ok) window.location.reload();
  }

  return (
    <button
      disabled={loading}
      className={styles.delete}
      onClick={handleOnClick}
    >
      Deletar
    </button>
  );
};

export { PhotosDelete };
