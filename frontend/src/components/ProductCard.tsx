import { FC } from "react";
import { Product } from "../store/shopSlice.ts";
import NoImage from "./icons/NoImage.tsx";
import "../styles/components/ProductCard.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (<li>
    <Link to={`products/${product.id}`}>
      <div className={`product-card ${theme}`}>
        <div className="product-img">
          {product.imgUrl ?
            < img src={product.imgUrl!} alt={product.name} />
            : <NoImage className={"no-img"} fill={theme === "light" ? "#000" : "#fff"} />}
        </div>
        <p className="title">{product.name}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
      </div>
    </Link>
  </li>);
};

export default ProductCard;