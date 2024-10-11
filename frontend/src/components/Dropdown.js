import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../styles/components/Dropdown.scss";
import DropdownArrow from "./icons/DropdownArrow.tsx";
import { useSelector } from "react-redux";
import IconButton from "./IconButton.tsx";
import CloseCircle from "./icons/CloseCircle.tsx";
const Dropdown = ({ label, className, options = [], onSelect }) => {
    const theme = useSelector((state) => state.theme.theme);
    const [value, setValue] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const handleSelect = (value) => {
        onSelect(value);
        setValue(value);
        setShowOptions(false);
    };
    const toggleOptions = () => {
        setShowOptions((prevState) => !prevState);
    };
    const clearFilter = (e) => {
        e?.stopPropagation();
        onSelect(null);
        setValue(null);
    };
    return (_jsxs("div", { className: `relative ${className} drop-down ${theme}`, children: [_jsxs("div", { className: `p-4 label`, onClick: toggleOptions, children: [_jsx("p", { className: "capitalize", children: value ? value : label }), value === null ? _jsx(DropdownArrow, { className: `w-5 ${showOptions ? "rotate-180" : ""}` }) :
                        _jsx(IconButton, { iconElement: _jsx(CloseCircle, { className: "w-5" }), onClick: clearFilter })] }), _jsx("ul", { className: `options ${showOptions ? "" : "hidden"}`, children: options.map((item) => (_jsx("li", { onClick: () => handleSelect(item), className: "capitalize", children: item }, item))) })] }));
};
export default Dropdown;
