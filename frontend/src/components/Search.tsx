import { ChangeEvent, FC } from "react";
import Input from "./Input.tsx";
import "../styles/components/Search.scss";
import SearchIcon from "./icons/SearchIcon.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

interface SearchProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ onChange }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (<div className="search-bar">
    <div>

      <SearchIcon className="search-icon" fill={theme === "light" ? "#000" : "#fff"} />
      <Input className="search-bar-input" placeholder={"Search..."} onChange={onChange} />
    </div>
  </div>);
};

export default Search;