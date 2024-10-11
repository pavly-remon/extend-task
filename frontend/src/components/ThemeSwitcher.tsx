import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice.ts";
import MoonIcon from "./icons/MoonIcon.tsx";
import SunIcon from "./icons/SunIcon.tsx";
import IconButton from "./IconButton.tsx";
import { RootState } from "../store/store.ts";
import "../styles/components/ThemeSwitcher.scss";

const ThemeSwitcher: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
    window.localStorage.setItem("shop-theme", theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);
  return (
    <div className="theme-switcher">
      <p className={theme}>Theme:</p>
      <IconButton iconElement={theme !== "light" ? <MoonIcon className="text-white w-6"/> : <SunIcon className="w-6 text-orange-400" />} onClick={changeTheme} />
    </div>
  );
};

export default ThemeSwitcher;