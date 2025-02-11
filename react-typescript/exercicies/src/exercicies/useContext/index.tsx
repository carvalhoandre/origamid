import { UserContextProvider } from "../../contexts/UserContext";

import Content from "../../components/Content";
import Header from "../../components/Header";

const UseContext = () => {
  return (
    <UserContextProvider>
      <Header />

      <Content />
    </UserContextProvider>
  );
};

export default UseContext;
