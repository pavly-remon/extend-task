import { ChangeEvent, FC } from "react";
import "../styles/components/Input.scss";
import { useSelector } from "react-redux";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ className, placeholder, type = "text", onChange, defaultValue }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (<input className={`input ${className} ${theme}`} type={type} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} />);
};

export default Input;