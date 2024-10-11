import { jsx as _jsx } from "react/jsx-runtime";
import ProductCard from "./ProductCard.tsx";
import "../styles/components/ProductList.scss";
import useFetch from "../hooks/useFetch.ts";
import Error from "./Error.tsx";
import { useSelector } from "react-redux";
import ProductTile from "./ProductTile.tsx";
const ProductList = ({ inputSearch, categoryFilter }) => {
    const view = useSelector((state) => state.theme.productListView);
    let url = "http://localhost:3000/products";
    if (categoryFilter) {
        url += `?category=${categoryFilter}`;
    }
    const { data, loading, error } = useFetch(url, {});
    const filteredProducts = data?.filter((item) => item.name.toLowerCase().includes(inputSearch.toLowerCase())) || [];
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsx(Error, { msg: error });
    const ProductElem = view === "grid" ? ProductCard : ProductTile;
    return (_jsx("div", { className: "flex justify-center items-center w-full", children: _jsx("ul", { className: `${view === "grid" ? "product-grid" : "product-list"}`, children: filteredProducts.map(product => (_jsx(ProductElem, { product: product }, product.id))) }) }));
};
export default ProductList;
