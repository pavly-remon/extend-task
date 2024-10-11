import { FC, MouseEvent, ReactNode } from "react";
interface Props {
    iconElement: ReactNode;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
declare const IconButton: FC<Props>;
export default IconButton;
