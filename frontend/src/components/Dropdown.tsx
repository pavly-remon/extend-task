import {MouseEvent, useState} from "react";
import "../styles/components/Dropdown.scss";
import DropdownArrow from "./icons/DropdownArrow.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import IconButton from "./IconButton.tsx";
import CloseCircle from "./icons/CloseCircle.tsx";

interface Props<T> {
    label: string,
    className?: string,
    options: T[],
    onSelect: (v: T | null) => void,
}

const Dropdown = <T, >({label, className, options = [], onSelect}: Props<T>) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const [value, setValue] = useState<T | null>(null);
    const [showOptions, setShowOptions] = useState(false);
    const handleSelect = (value: T) => {
        onSelect(value);
        setValue(value);
        setShowOptions(false);
    };
    const toggleOptions = () => {
        setShowOptions((prevState) => !prevState);
    };

    const clearFilter = (e?: MouseEvent<HTMLButtonElement>) => {
        e?.stopPropagation();
        e?.preventDefault();
        onSelect(null);
        setValue(null);
    };

    return (
        <div className={`relative ${className} drop-down ${theme}`}>

            <div className={`p-4 label`} onClick={toggleOptions}>
                <p className="capitalize">{value ? value as string : label}</p>
                {value === null ? <DropdownArrow className={`w-5 ${showOptions ? "rotate-180" : ""}`}/> :
                    <IconButton iconElement={<CloseCircle className="w-5"/>} onClick={clearFilter}/>}
            </div>
            <ul className={`options ${showOptions ? "" : "hidden"}`}>
                {options.map((item) => (
                    <li onClick={() => handleSelect(item)} className="capitalize" key={item as string}>{item as string}</li>))}
            </ul>
        </div>
    );
};

export default Dropdown;