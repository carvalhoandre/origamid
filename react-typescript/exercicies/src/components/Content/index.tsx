import { UseUser } from "../../contexts/UserContext";

const Content = () => {
  const { data, loading, error } = UseUser();

  console.log(data);
  if (!data || loading) return <p>Loading...</p>;

  if (error) return <p>Error ao realizar ação</p>;

  return (
    <section>
      <h2>Preferencias</h2>

      <h4>Playback</h4>
      <p>{data.preferencias.playback}</p>
      <h4>Qualidade</h4>
      <p>{data.preferencias.qualidade}</p>
      <h4>Volume</h4>
      <p>{data.preferencias.volume}</p>
    </section>
  );
};

export default Content;
