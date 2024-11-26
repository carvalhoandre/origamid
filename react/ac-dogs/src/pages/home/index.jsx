import { Feed } from "../../components/feed";
import { Head } from "../../components/head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site AC Dogs, com o feed de fotos"
      />

      <Feed />
    </section>
  );
};

export { Home };
