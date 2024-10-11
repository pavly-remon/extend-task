import { ChangeEvent, FC, useState } from "react";
import Search from "../components/Search";
import "../styles/pages/Home.scss";
import ProductList from "../components/ProductList.tsx";

const Home: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const handleSelect = (value: string | null) => {
    setCategoryFilter(value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };
  return (
    <div className="home">
      <Search onChange={handleInputChange} onSelect={handleSelect} />
      <ProductList inputSearch={inputSearch} categoryFilter={categoryFilter} />
    </div>
  );
};

export default Home;
