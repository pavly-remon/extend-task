import { FC } from "react";
import ProductCard from "./ProductCard.tsx";
import "../styles/components/ProductList.scss";
import useFetch from "../hooks/useFetch.ts";
import { Product } from "../store/shopSlice.ts";
import Error from "./Error.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import ProductTile from "./ProductTile.tsx";
import LoadingGIF from "../components/Loading.tsx";

interface ProductListProps {
  inputSearch: string;
  categoryFilter: string | null;
}

const ProductList: FC<ProductListProps> = ({ inputSearch, categoryFilter }) => {
  const view = useSelector((state: RootState) => state.theme.productListView);
  let url = "http://localhost:3000/products";
  if (categoryFilter) {
    url += `?category=${categoryFilter}`;
  }
  const { data, loading, error } = useFetch<Product[]>(url, {});
  const filteredProducts = data?.filter((item) =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  ) || [];

  if (loading) return <LoadingGIF />;
  if (error) return <Error msg={error} />;
  const ProductElem = view === "grid" ? ProductCard : ProductTile;
  return (<div className="flex justify-center items-center w-full">
    <ul className={`${view === "grid" ? "product-grid" : "product-list"}`}>
      {filteredProducts.map(product => (<ProductElem product={product} key={product.id} />))}
    </ul>
  </div>);
};

export default ProductList;