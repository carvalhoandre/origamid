import React from "react";

import { Error } from "../../../error";
import { Loading } from "../../../loading";
import { useFetch } from "../../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../../service/photos";

import { FeedPhotosItem } from "../feedPhotosItem";

import styles from "./styles.module.css";

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { options, url } = PHOTOS_GET({ page: 1, total: 6, user: 0 });

      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, []);

  if (error) return <Error error={error} />;

  if (loading || !data) return <Loading />;

  console.log(`'data'`, data);
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export { FeedPhotos };
