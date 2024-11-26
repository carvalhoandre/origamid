import React from "react";

import Send from "../../assets/enviar.svg?react";

import { Error } from "../error-ss";
import { useFetch } from "../../hooks/useFetch";
import { COMMENT_POST } from "../../service/comments";

import styles from "./styles.module.css";

const PhotosCommentsForm = ({ id, setComments, single }) => {
  const { error, request } = useFetch();

  const [comment, setComment] = React.useState("");

  async function handleOnSubmit(event) {
    event.preventDefault();

    const { options, url } = COMMENT_POST(id, { comment });

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleOnSubmit}
    >
      <textarea
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        className={styles.textarea}
        onChange={({ target }) => setComment(target.value)}
      />

      <button className={styles.button}>
        <Send />
      </button>

      <Error error={error} />
    </form>
  );
};

export { PhotosCommentsForm };
