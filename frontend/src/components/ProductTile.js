import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import NoImage from "./icons/NoImage.tsx";
import "../styles/components/ProductTile.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton.tsx";
import Heart from "./icons/Heart.tsx";
import AddCircle from "./icons/AddCircle.tsx";
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const theme = useSelector((state) => state.theme.theme);
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = (e) => {
        e?.stopPropagation();
        setIsFavorite(prevState => !prevState);
    };
    const addToCart = (e) => {
        e?.stopPropagation();
        alert("Added To the Cart!");
    };
    const handleClick = () => {
        navigate(`products/${product.id}`);
    };
    return (_jsx("li", { children: _jsxs("div", { className: `product-tile ${theme}`, onClick: handleClick, children: [_jsx("div", { className: "product-img", children: product.imgUrl ?
                        _jsx("img", { src: product.imgUrl, alt: product.name })
                        : _jsx(NoImage, { className: "no-img text-black" }) }), _jsxs("div", { className: "product-content", children: [_jsx("p", { className: "title", children: product.name }), _jsx("p", { className: "description", children: product.description }), _jsxs("p", { className: "price", children: ["$", product.price] }), _jsx("p", { className: "category", children: product.category })] }), _jsxs("div", { className: "flex justify-center gap-4", children: [_jsx(IconButton, { iconElement: _jsx(AddCircle, { fill: "none" }), onClick: addToCart }), _jsx(IconButton, { iconElement: _jsx(Heart, { fill: `${isFavorite ? "#ff0000" : "none"}` }), onClick: toggleFavorite })] })] }) }));
};
export default ProductCard;
