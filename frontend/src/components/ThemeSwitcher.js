import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice.ts";
import MoonIcon from "./icons/MoonIcon.tsx";
import SunIcon from "./icons/SunIcon.tsx";
import IconButton from "./IconButton.tsx";
import "../styles/components/ThemeSwitcher.scss";
const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(toggleTheme());
        window.localStorage.setItem("shop-theme", theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.classList.toggle("light", theme === "light");
    }, [theme]);
    return (_jsxs("div", { className: "theme-switcher", children: [_jsx("p", { className: theme, children: "Theme:" }), _jsx(IconButton, { iconElement: theme !== "light" ? _jsx(MoonIcon, { className: "text-white w-6" }) : _jsx(SunIcon, { className: "w-6 text-orange-400" }), onClick: changeTheme })] }));
};
export default ThemeSwitcher;
