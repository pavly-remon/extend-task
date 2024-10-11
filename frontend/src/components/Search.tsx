import { ChangeEvent, FC, useMemo } from "react";
import Input from "./Input.tsx";
import "../styles/components/Search.scss";
import SearchIcon from "./icons/SearchIcon.tsx";
import Dropdown from "./Dropdown.tsx";
import useFetch from "../hooks/useFetch.ts";
import IconButton from "./IconButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import ListView from "./icons/ListView.tsx";
import GridView from "./icons/GridView.tsx";
import { toggleProductListView } from "../store/themeSlice.ts";

interface SearchProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (v: string | null) => void;
}

const Search: FC<SearchProps> = ({ onChange, onSelect }) => {
  const dispatch = useDispatch();
  const { data } = useFetch<string[]>("http://localhost:3000/products/categories");
  const view = useSelector((state: RootState) => state.theme.productListView);
  const categories = useMemo(() => data ?? [], [data]);

  const changeView = () => {
    dispatch(toggleProductListView());
  };
  return (<div className="search-bar">
    <div className="name-filter">
      <SearchIcon className="search-icon" />
      <Input className="search-bar-input" placeholder={"Search..."} onChange={onChange} />
    </div>
    <Dropdown className={"category-filter"} label={"Category"} options={categories} onSelect={onSelect} />
    <IconButton iconElement={
      view === "grid" ? <ListView className="w-5" fill="none" /> : <GridView className="w-5" fill="none" />
    } onClick={changeView} />
  </div>);
};

export default Search;