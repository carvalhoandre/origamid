import { ButtonProps } from "./types";

const Button = ({ sum, setSum }: ButtonProps) => {
  return (
    <button onClick={() => setSum((t) => t + 1)}>Incrementar {sum}</button>
  );
};

export default Button;
