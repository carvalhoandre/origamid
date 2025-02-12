import { UseData } from "../context/dataContext";

const Header = () => {
  const { data } = UseData();

  console.log(data);
  return <></>;
};

export default Header;
