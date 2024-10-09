import { FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Navbar.scss";
import SunIcon from "./icons/SunIcon.tsx";
import MoonIcon from "./icons/MoonIcon.tsx";
import IconButton from "./IconButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice.ts";

const Navbar: FC = () => {
  const loc = useLocation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);
  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-brand">Shop</div>
      <ul className={`navbar-links ${theme}`}>
        <li>
          <Link className={loc.pathname === "/" ? "active" : undefined} to={"/"}>Home</Link>
        </li>
        <li>
          <Link className={loc.pathname === "/about" ? "active" : undefined} to={"/about"}>About</Link>
        </li>
      </ul>
      <IconButton iconElement={theme === "light" ? <MoonIcon /> : <SunIcon fill={"#e7e43c"} />} onClick={changeTheme} />
    </nav>
  );
};

export default Navbar;