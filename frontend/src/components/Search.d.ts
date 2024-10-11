import { ChangeEvent, FC } from "react";
import "../styles/components/Search.scss";
interface SearchProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onSelect: (v: string | null) => void;
}
declare const Search: FC<SearchProps>;
export default Search;
