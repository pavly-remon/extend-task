import { FC } from "react";
import SadEmoji from "./icons/SadEmoji.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

interface Props {
  msg: string;
}

const Error: FC<Props> = ({ msg }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (<div className="fixed top-1/3 w-full flex flex-col items-center">
    <SadEmoji className={`w-1/4 ${theme === "light" ? "text-light-primary-color" : "text-dark-primary-color"}`} />
    <p className="font-bold text-2xl text-nowrap">{msg}</p>
  </div>);
};

export default Error;