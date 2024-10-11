import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/Navbar.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/themeSlice.ts";
const App = () => {
    const dispatch = useDispatch();
    const theme = window.localStorage.getItem("shop-theme");
    dispatch(setTheme(theme ?? "light"));
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/products/:id", element: _jsx(ProductDetails, {}) }), _jsx(Route, { element: _jsx(NotFound, {}) })] }) })] }));
};
export default App;
