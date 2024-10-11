import { FC } from "react";
import { Product } from "../store/shopSlice.ts";
import "../styles/components/ProductCard.scss";
interface ProductCardProps {
    product: Product;
}
declare const ProductCard: FC<ProductCardProps>;
export default ProductCard;
