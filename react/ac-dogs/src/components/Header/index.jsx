import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export { Header };
