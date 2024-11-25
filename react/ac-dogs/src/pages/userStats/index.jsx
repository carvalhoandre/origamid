import React from "react";

import { useFetch } from "../../hooks/useFetch";
import { STATS_GET } from "../../service/stats";

import { Head } from "../../components/head";
import { Loading } from "../../components/loading";
import { Error } from "../../components/error";
import { Graphs } from "./components/graphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();

      await request(url, options);
    }

    getData();
  }, []);

  if (error) return <Error error={error} />;

  if (loading || !data) return <Loading />;

  return (
    <section className={styles.container}>
      <Head title="Estatística" />

      <Graphs data={data} />
    </section>
  );
};

export { UserStats };
