const Button = (props) => {
  return (
    <button onClick={() => props.handleClick(props.item)}>{props.item}</button>
  );
};

export default Button;
