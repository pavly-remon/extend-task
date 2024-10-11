import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "../styles/pages/Home.scss";
import useFetch from "../hooks/useFetch.ts";
import { Link, useParams } from "react-router-dom";
import "../styles/pages/ProductDetails.scss";
import NoImage from "../components/icons/NoImage.tsx";
import { useSelector } from "react-redux";
import Error from "../components/Error.tsx";
const ProductDetails = () => {
    const params = useParams();
    const url = `http://localhost:3000/products/info/${params.id}`;
    const { data, loading, error } = useFetch(url, {});
    const theme = useSelector((state) => state.theme.theme);
    if (loading || data === null)
        return _jsx("p", { children: "Loading..." });
    return (_jsxs(_Fragment, { children: [_jsx(MobileLayout, { className: "laptop:hidden", theme: theme, product: data, error: error }), _jsx(DesktopLayout, { className: "mobile:hidden", theme: theme, product: data, error: error })] }));
};
const MobileLayout = ({ theme, className, product, error }) => {
    return (_jsx("div", { className: `${className} product-details ${theme}`, children: error ? _jsx(Error, { msg: "Couldn't Find that Product!" })
            : _jsxs(_Fragment, { children: [_jsx("p", { className: "title", children: product?.name }), _jsx("div", { className: "product-img", children: product?.imgUrl ?
                            _jsx("img", { src: product.imgUrl, alt: product.name })
                            : _jsx(NoImage, { className: "no-img" }) }), _jsxs("div", { className: "w-full", children: [_jsx("p", { className: "font-bold text-xl mb-2", children: "Description:" }), _jsx("p", { className: "description", children: product?.description })] }), _jsxs("div", { className: "w-full flex justify-center items-center gap-1", children: [_jsx("p", { className: "font-bold text-xl mb-2", children: "Category:" }), _jsx("p", { className: "description", children: product?.category })] }), _jsxs("div", { className: "w-full flex justify-center items-center gap-1", children: [_jsx("p", { className: "font-bold text-xl", children: "Price:" }), _jsxs("p", { className: "description", children: ["$", product?.price] })] }), _jsx("button", { className: "add-cart", children: "Add to Cart" }), _jsx(Link, { to: "/", className: "go-back", children: "Go Back" })] }) }));
};
const DesktopLayout = ({ theme, className, product, error }) => {
    return (_jsx("div", { className: `${className} product-details ${theme}`, children: error ? _jsx(Error, { msg: "Couldn't Find that Product!" })
            : _jsxs("div", { className: "flex w-full gap-12", children: [_jsx("div", { className: "product-img", children: product?.imgUrl ?
                            _jsx("img", { src: product.imgUrl, alt: product.name })
                            : _jsx(NoImage, { className: `no-img ${theme === "light" ? "text-black" : "text-gray-800"}` }) }), _jsxs("div", { className: "flex flex-col gap-4 w-full", children: [_jsx("p", { className: "title", children: product?.name }), _jsxs("div", { className: "w-full", children: [_jsx("p", { className: "font-bold text-xl mb-2", children: "Description:" }), _jsx("p", { className: "description", children: product?.description })] }), _jsxs("div", { className: "w-full flex justify-center items-center gap-1", children: [_jsx("p", { className: "font-bold text-xl mb-2", children: "Category:" }), _jsx("p", { className: "description", children: product?.category })] }), _jsxs("div", { className: "w-full flex justify-center items-center gap-1", children: [_jsx("p", { className: "font-bold text-xl", children: "Price:" }), _jsxs("p", { className: "description", children: ["$", product?.price] })] }), _jsxs("div", { className: "w-[50%] flex flex-col items-center gap-4", children: [_jsx("button", { className: "add-cart", children: "Add to Cart" }), _jsx(Link, { to: "/", className: "go-back", children: "Go Back" })] })] })] }) }));
};
export default ProductDetails;
