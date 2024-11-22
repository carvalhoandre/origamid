import { Link } from "react-router-dom";

import { PhotoComments } from "../photoComments";

import styles from "./styles.module.css";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>

      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>

            <span className={styles.views}>{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{photo.peso}</li>
            <li>
              {photo.idade} {photo.idade > 1 ? "anos" : "ano"}
            </li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export { PhotoContent };
