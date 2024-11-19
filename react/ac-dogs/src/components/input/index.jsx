import styles from "./styles.module.css";

const Input = ({ label, type, name, ...props }) => {
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

      <p className={styles.error}>Error</p>
    </div>
  );
};

export { Input };
