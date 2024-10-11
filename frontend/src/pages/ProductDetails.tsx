import { FC } from "react";
import "../styles/pages/Home.scss";
import useFetch from "../hooks/useFetch.ts";
import { Product } from "../store/shopSlice.ts";
import { Link, useParams } from "react-router-dom";
import "../styles/pages/ProductDetails.scss";
import NoImage from "../components/icons/NoImage.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import Error from "../components/Error.tsx";
import LoadingGIF from "../components/Loading.tsx";

const ProductDetails: FC = () => {
  const params = useParams();
  const url = `http://localhost:3000/products/info/${params.id}`;
  const { data, loading, error } = useFetch<Product>(url, {});
  const theme = useSelector((state: RootState) => state.theme.theme);
  if (loading || data === null) return <LoadingGIF />;
  return (

    <>
      <MobileLayout className="laptop:hidden" theme={theme} product={data} error={error} />
      <DesktopLayout className="mobile:hidden" theme={theme} product={data} error={error} />
    </>
  );
};

interface Props {
  theme: string,
  className?: string,
  product: Product | null,
  error?: string | null
}

const MobileLayout: FC<Props> = ({ theme, className, product, error }) => {
  return (<div className={`${className} product-details ${theme}`}>
    {error ? <Error msg={"Couldn't Find that Product!"} />
      : <>
        <p className="title">{product?.name}</p>
        <div className="product-img">
          {product?.imgUrl ?
            < img src={product.imgUrl!} alt={product.name} />
            : <NoImage className={"no-img"} />}
        </div>
        <div className="w-full">
          <p className="font-bold text-xl mb-2">Description:</p>
          <p className="description">{product?.description}</p>
        </div>
        <div className="w-full flex justify-center items-center gap-1">
          <p className="font-bold text-xl mb-2">Category:</p>
          <p className="description">{product?.category}</p>
        </div>
        <div className="w-full flex justify-center items-center gap-1">
          <p className="font-bold text-xl">Price:</p>
          <p className="description">${product?.price}</p>
        </div>
        <button className="add-cart">Add to Cart</button>
        <Link to={"/"} className="go-back">Go Back</Link>
      </>
    }
  </div>);
};

const DesktopLayout: FC<Props> = ({ theme, className, product, error }) => {
  return (<div className={`${className} product-details ${theme}`}>
    {error ? <Error msg={"Couldn't Find that Product!"} />
      : <div className="flex w-full gap-12">
        <div className="product-img">
          {product?.imgUrl ?
            < img src={product.imgUrl!} alt={product.name} />
            : <NoImage className={`no-img ${theme === "light" ? "text-black" : "text-gray-800"}`} />}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="title">{product?.name}</p>
          <div className="w-full">
            <p className="font-bold text-xl mb-2">Description:</p>
            <p className="description">{product?.description}</p>
          </div>
          <div className="w-full flex justify-center items-center gap-1">
            <p className="font-bold text-xl mb-2">Category:</p>
            <p className="description">{product?.category}</p>
          </div>
          <div className="w-full flex justify-center items-center gap-1">
            <p className="font-bold text-xl">Price:</p>
            <p className="description">${product?.price}</p>
          </div>
          <div className="w-[50%] flex flex-col items-center gap-4">
            <button className="add-cart">Add to Cart</button>
            <Link to={"/"} className="go-back">Go Back</Link>
          </div>
        </div>
      </div>
    }
  </div>);
};

export default ProductDetails;