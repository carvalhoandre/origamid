import styles from "./styles.module.css";

const Input = ({ label, type, name, error, value, onChange, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export { Input };
