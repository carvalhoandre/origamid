import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { PHOTO_GET } from "../../service/photos";

import { Error } from "../../components/error";
import { Loading } from "../../components/loading";
import { PhotoContent } from "../../components/photoContent";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { options, url } = PHOTO_GET(id);

      await request(url, options);
    }

    fetchPhotos();
  }, []);

  if (error) return <Error error={error} />;

  if (loading || !data) return <Loading />;

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single />
    </section>
  );
};

export { Photo };
