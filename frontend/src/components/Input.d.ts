import { ChangeEvent, FC } from "react";
import "../styles/components/Input.scss";
interface InputProps {
    className?: string;
    placeholder?: string;
    type?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: FC<InputProps>;
export default Input;
