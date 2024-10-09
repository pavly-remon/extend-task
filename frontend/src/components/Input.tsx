import {ChangeEvent, FC} from "react";

interface InputProps {
    placeholder?: string;
    type?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({placeholder, type = "text", onChange, defaultValue}) => {
    return (<input type={type} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>);
}

export default Input;