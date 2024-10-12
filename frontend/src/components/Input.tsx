import {ChangeEvent, FC} from "react";
import "../styles/components/Input.scss";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

interface InputProps {
    className?: string;
    placeholder?: string;
    type?: string;
    defaultValue?: string | number | readonly string[];
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

    [key: string]: any;
}

const Input: FC<InputProps> = ({className, placeholder, type = "text", onChange, defaultValue, ...props}) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    return (<input className={`input ${className} ${theme}`} type={type} placeholder={placeholder} value={defaultValue} onChange={onChange} {...props} />
    );
};

export default Input;