import { FC, MouseEvent, useState } from "react";
import { Product } from "../store/shopSlice.ts";
import NoImage from "./icons/NoImage.tsx";
import "../styles/components/ProductCard.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton.tsx";
import Heart from "./icons/Heart.tsx";
import AddCircle from "./icons/AddCircle.tsx";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = (e?: MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setIsFavorite(prevState => !prevState);
  };
  const addToCart = (e?: MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    alert("Added To the Cart!");
  };
  const handleClick = () => {
    navigate(`products/${product.id}`);
  };
  return (<li className="flex justify-center">
    <div className={`product-card ${theme}`} onClick={handleClick}>
      <div className="product-img">
        {product.imgUrl ?
          < img src={product.imgUrl!} alt={product.name} />
          : <NoImage className={"no-img text-black"} />}
      </div>
      <p className="title">{product.name}</p>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
      <div className="w-full flex justify-center gap-4">
        <IconButton iconElement={<AddCircle fill="none" />} onClick={addToCart} />
        <IconButton iconElement={<Heart fill={`${isFavorite ? "#ff0000" : "none"}`} />} onClick={toggleFavorite} />
      </div>
    </div>
  </li>);
};

export default ProductCard;