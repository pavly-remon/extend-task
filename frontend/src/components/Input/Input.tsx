import { ChangeEvent, FC } from "react";
import "./Input.scss";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ className, placeholder, type = "text", onChange, defaultValue }) => {
  return (<input className={`input ${className}`} type={type} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} />);
};

export default Input;