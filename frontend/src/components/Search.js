import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import Input from "./Input.tsx";
import "../styles/components/Search.scss";
import SearchIcon from "./icons/SearchIcon.tsx";
import Dropdown from "./Dropdown.tsx";
import useFetch from "../hooks/useFetch.ts";
import IconButton from "./IconButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import ListView from "./icons/ListView.tsx";
import GridView from "./icons/GridView.tsx";
import { toggleProductListView } from "../store/themeSlice.ts";
const Search = ({ onChange, onSelect }) => {
    const dispatch = useDispatch();
    const { data } = useFetch("http://localhost:3000/products/categories");
    const view = useSelector((state) => state.theme.productListView);
    const categories = useMemo(() => data ?? [], [data]);
    const changeView = () => {
        dispatch(toggleProductListView());
    };
    return (_jsxs("div", { className: "search-bar", children: [_jsxs("div", { className: "name-filter", children: [_jsx(SearchIcon, { className: "search-icon" }), _jsx(Input, { className: "search-bar-input", placeholder: "Search...", onChange: onChange })] }), _jsx(Dropdown, { className: "category-filter", label: "Category", options: categories, onSelect: onSelect }), _jsx(IconButton, { iconElement: view === "grid" ? _jsx(ListView, { className: "w-5", fill: "none" }) : _jsx(GridView, { className: "w-5", fill: "none" }), onClick: changeView })] }));
};
export default Search;
