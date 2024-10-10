import { FC } from "react";
import { Product } from "../store/shopSlice.ts";
import ProductCard from "./ProductCard.tsx";
import "../styles/components/ProductList.scss"
interface ProductListProps {
  products: Product[] | null;
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (<ul className="product-list">
    {products?.map(product => (<ProductCard product={product} key={product.id} />))}
  </ul>);
};

export default ProductList;