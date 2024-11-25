import React from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import { Image } from "../image";
import { PhotosDelete } from "../photosDelete";
import { PhotosComments } from "../photoComments";

import styles from "./styles.module.css";

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);

  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>

      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotosDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.views}>{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade > 1 ? "anos" : "ano"}
            </li>
          </ul>
        </div>
      </div>

      <PhotosComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export { PhotoContent };
