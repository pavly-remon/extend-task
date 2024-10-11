import { FC } from "react";
import "../styles/components/ProductList.scss";
interface ProductListProps {
    inputSearch: string;
    categoryFilter: string | null;
}
declare const ProductList: FC<ProductListProps>;
export default ProductList;
