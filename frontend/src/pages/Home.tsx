import { ChangeEvent, FC, useState } from "react";
import Search from "../components/Search.tsx";
import "../styles/pages/Home.scss";
import useFetch from "../hooks/useFetch.ts";
import { Product } from "../store/shopSlice.ts";
import ProductList from "../components/ProductList.tsx";

const Home: FC = () => {
  const url = "http://localhost:3000/products";
  const [inputSearch, setInputSearch] = useState<string>("");
  const { data, loading, error } = useFetch<Product[]>(url, {});
  const filteredProducts = data?.filter((item) => item.name.toLowerCase().includes(inputSearch.toLowerCase())) || [];
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div className="home">
    <Search onChange={handleInputChange} />
    <ProductList products={filteredProducts} />
  </div>;
};

export default Home;