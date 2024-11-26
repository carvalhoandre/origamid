import Dog from "../../assets/dogs-footer.svg?react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dog />

      <p>AC Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export { Footer };
