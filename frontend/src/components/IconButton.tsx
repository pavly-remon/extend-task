import { FC, MouseEvent, ReactNode } from "react";

interface Props {
  iconElement: ReactNode,
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;

}

const IconButton: FC<Props> = ({ iconElement, onClick }) => {
  return (
    <button onClick={onClick}>{iconElement}</button>
  );
};

export default IconButton;