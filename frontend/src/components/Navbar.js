import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Navbar.scss";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
const Navbar = () => {
    const loc = useLocation();
    const theme = useSelector((state) => state.theme.theme);
    return (_jsxs("nav", { className: `navbar ${theme}`, children: [_jsx("div", { className: "navbar-brand", children: "Shop" }), _jsxs("ul", { className: `navbar-links ${theme}`, children: [_jsx("li", { children: _jsx(Link, { className: loc.pathname === "/" ? "active" : undefined, to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { className: loc.pathname === "/about" ? "active" : undefined, to: "/about", children: "About" }) })] }), _jsx(ThemeSwitcher, {})] }));
};
export default Navbar;
