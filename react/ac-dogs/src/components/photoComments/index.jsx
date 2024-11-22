import React from "react";
import { UserContext } from "../../context/userContext";

import { PhotosCommentsForm } from "../photosCommentsForm";

import styles from "./styles.module.css";

const PhotosComments = (props) => {
  const { login } = React.useContext(UserContext);

  const [comments, setComments] = React.useState(() => props.comments);

  return (
    <div>
      <ul className={styles.comment}>
        {comments.map((comment, key) => (
          <li key={comment.id + key}>
            <b>{comment.comment_author}: </b>

            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotosCommentsForm id={props.id} setComments={setComments} />}
    </div>
  );
};

export { PhotosComments };
