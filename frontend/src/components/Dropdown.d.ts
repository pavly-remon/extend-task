import "../styles/components/Dropdown.scss";
interface Props<T> {
    label: string;
    className?: string;
    options: T[];
    onSelect: (v: T | null) => void;
}
declare const Dropdown: <T>({ label, className, options, onSelect }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
