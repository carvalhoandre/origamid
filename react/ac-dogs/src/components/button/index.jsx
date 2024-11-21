import styles from "./styles.module.css";

const Button = ({ children, disabled, loading, ...props }) => {
  return (
    <button {...props} className={styles.button} disabled={disabled || loading}>
      {loading ? "Carregando..." : children}
    </button>
  );
};

export { Button };
