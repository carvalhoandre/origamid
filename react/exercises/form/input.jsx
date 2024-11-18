const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>

      <input
        type={props.type || "text"}
        value={props.value || ""}
        id={props.name}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};

export default Input;
