import { Routes } from "./routes";

import { UserStorage } from "./context/userContext";

import "./App.css";

const App = () => {
  return (
    <UserStorage>
      <Routes />
    </UserStorage>
  );
};

export default App;
