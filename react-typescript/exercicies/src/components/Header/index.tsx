import { UseUser } from "../../contexts/UserContext";

const Header = () => {
  const { data } = UseUser();

  if (!data) return <></>;

  return (
    <header>
      <p>{data.nome}</p>
    </header>
  );
};

export default Header;
