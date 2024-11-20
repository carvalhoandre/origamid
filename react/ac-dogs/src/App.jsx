import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { UserStorage } from "./context/userContext";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <UserStorage>
        <Routes />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
