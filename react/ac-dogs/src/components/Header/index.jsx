import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Dog from "../../assets/dogs.svg?react";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={`${styles.nav} "container"`}>
        <Link className={styles.logo} to="/" aria-label="AC - Dogs - Home">
          <Dog />
        </Link>

        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export { Header };
