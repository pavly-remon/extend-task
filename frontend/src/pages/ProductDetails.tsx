import { FC } from "react";
import "../styles/pages/Home.scss";
import useFetch from "../hooks/useFetch.ts";
import { Product } from "../store/shopSlice.ts";
import { Link, useParams } from "react-router-dom";
import "../styles/pages/ProductDetails.scss";
import NoImage from "../components/icons/NoImage.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

const ProductDetails: FC = () => {
  const params = useParams();
  const url = `http://localhost:3000/products/${params.id}`;
  const { data, loading, error } = useFetch<Product>(url, {});
  const theme = useSelector((state: RootState) => state.theme.theme);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div className={`product-details ${theme}`}>
    <p className="title">{data?.name}</p>
    <div className="product-img">
      {data?.imgUrl ?
        < img src={data?.imgUrl!} alt={data?.name} />
        : <NoImage className={"no-img"} fill={theme === "light" ? "#000" : "#fff"} />}
    </div>
    <div className="w-full">
      <p className="font-bold text-xl mb-2">Description:</p>
      <p className="description">{data?.description}</p>
    </div>
    <div className="w-full flex justify-center items-center gap-1">
      <p className="font-bold text-xl mb-2">Category:</p>
      <p className="description">{data?.category}</p>
    </div>
    <div className="w-full flex justify-center items-center gap-1">
      <p className="font-bold text-xl">Price:</p>
      <p className="description">${data?.price}</p>
    </div>
    <button className="add-cart">Add to Cart</button>
    <Link to={"/"} className="go-back" >Go Back</Link>
  </div>;
};

export default ProductDetails;