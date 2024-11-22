import React from "react";

import { FeedModal } from "./components/feedModal";
import { FeedPhotos } from "./components/feedPhotos";

import styles from "./styles.module.css";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div className={styles.container}>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export { Feed };
