import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Search from "../components/Search";
import "../styles/pages/Home.scss";
import ProductList from "../components/ProductList.tsx";
const Home = () => {
    const [inputSearch, setInputSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState(null);
    const handleSelect = (value) => {
        setCategoryFilter(value);
    };
    const handleInputChange = (e) => {
        setInputSearch(e.target.value);
    };
    return (_jsxs("div", { className: "home", children: [_jsx(Search, { onChange: handleInputChange, onSelect: handleSelect }), _jsx(ProductList, { inputSearch: inputSearch, categoryFilter: categoryFilter })] }));
};
export default Home;
