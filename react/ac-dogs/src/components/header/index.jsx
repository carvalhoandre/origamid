import React from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import Dog from "../../assets/dogs.svg?react";

import styles from "./styles.module.css";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} "container"`}>
        <Link className={styles.logo} to="/" aria-label="AC - Dogs - Home">
          <Dog />
        </Link>

        {!!data ? (
          <Link to="/account" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Header };
