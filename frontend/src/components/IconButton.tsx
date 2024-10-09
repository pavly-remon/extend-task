import { FC, ReactNode } from "react";

interface Props {
  iconElement: ReactNode,
  onClick?: () => void;

}

const IconButton: FC<Props> = ({ iconElement, onClick }) => {
  return (
    <button onClick={onClick}>{iconElement}</button>
  );
};

export default IconButton;