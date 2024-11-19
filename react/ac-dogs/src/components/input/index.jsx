import styles from "./styles.module.css";

const Input = ({ label, type, name, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        {...props}
      />

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export { Input };
