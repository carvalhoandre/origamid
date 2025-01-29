import InputProps from "./types";

import "./styles.css";

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="input">
      <label htmlFor={label} id={label}>
        {label}
      </label>
      <input id={label} name={label} {...props} />
    </div>
  );
};

export default Input;
