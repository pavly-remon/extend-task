import { jsx as _jsx } from "react/jsx-runtime";
import "../styles/components/Input.scss";
import { useSelector } from "react-redux";
const Input = ({ className, placeholder, type = "text", onChange, defaultValue }) => {
    const theme = useSelector((state) => state.theme.theme);
    return (_jsx("input", { className: `input ${className} ${theme}`, type: type, placeholder: placeholder, defaultValue: defaultValue, onChange: onChange }));
};
export default Input;
