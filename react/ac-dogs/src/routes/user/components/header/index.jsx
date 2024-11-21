import React from "react";
import { useLocation } from "react-router-dom";

import { UserHeaderNav } from "../userHeaderNav";

import styles from "./styles.module.css";

const UserHeader = () => {
  const localtion = useLocation();

  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const { pathname } = localtion;

    switch (pathname) {
      case "/account/post":
        setTitle("Poste sua foto");
        break;
      case "/account/stats":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [localtion]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>

      <UserHeaderNav />
    </header>
  );
};

export { UserHeader };
