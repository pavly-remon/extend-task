import { jsx as _jsx } from "react/jsx-runtime";
const IconButton = ({ iconElement, onClick }) => {
    return (_jsx("button", { onClick: onClick, children: iconElement }));
};
export default IconButton;
