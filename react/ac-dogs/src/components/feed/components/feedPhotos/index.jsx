import React from "react";

import { Error } from "../../../error-ss";
import { Loading } from "../../../loading";
import { useFetch } from "../../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../../service/photos";

import { FeedPhotosItem } from "../feedPhotosItem";

import styles from "./styles.module.css";

const FeedPhotos = ({
  user,
  page = 1,
  total = 6,
  setModalPhoto,
  setInfinite,
}) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { options, url } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();
  }, []);

  if (error) return <Error error={error} />;

  if (loading || !data) return <Loading />;

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export { FeedPhotos };
