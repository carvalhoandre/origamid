import styles from "./styles.module.css";

const Error = ({ error }) => {
  if (!error) return null;

  return <p className={styles.error}>{error}</p>;
};

export { Error };
