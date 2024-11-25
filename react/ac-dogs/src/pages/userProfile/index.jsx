import { useParams } from "react-router-dom";

import { Feed } from "../../components/feed";
import { Loading } from "../../components/loading";
import { Head } from "../../components/head";

const UserProfile = () => {
  const { user } = useParams();

  if (!user) return <Loading />;

  return (
    <section className="container mainSection">
      <Head title={user} />

      <h1 className="title">{user}</h1>

      <Feed user={user} />
    </section>
  );
};

export { UserProfile };
