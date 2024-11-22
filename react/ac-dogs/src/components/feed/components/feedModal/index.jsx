import React from "react";

import { useFetch } from "../../../../hooks/useFetch";
import { PHOTO_GET } from "../../../../service/photos";

import { Error } from "../../../error";
import { Loading } from "../../../loading";
import { PhotoContent } from "../../../photoContent";

import styles from "./styles.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  React.useEffect(() => {
    async function fetchPhotos() {
      const { options, url } = PHOTO_GET(photo.id);

      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [photo]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}

      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </div>
  );
};

export { FeedModal };
