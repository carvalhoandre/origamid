import { HTMLProps } from "react";

export default interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}
