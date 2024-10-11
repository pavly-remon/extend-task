import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SadEmoji from "./icons/SadEmoji.tsx";
import { useSelector } from "react-redux";
const Error = ({ msg }) => {
    const theme = useSelector((state) => state.theme.theme);
    return (_jsxs("div", { className: "fixed top-1/3 w-full flex flex-col items-center", children: [_jsx(SadEmoji, { className: `w-1/4 ${theme === "light" ? "text-light-primary-color" : "text-dark-primary-color"}` }), _jsx("p", { className: "font-bold text-2xl text-nowrap", children: msg })] }));
};
export default Error;
