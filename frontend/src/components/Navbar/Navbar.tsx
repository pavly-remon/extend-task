import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import SunIcon from "../icons/SunIcon.tsx";
import MoonIcon from "../icons/MoonIcon.tsx";
import IconButton from "../IconButton.tsx";

const Navbar: FC = () => {
  const loc = useLocation();
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
      <IconButton iconElement={theme === "light" ? <MoonIcon /> : <SunIcon fill={"#e7e43c"} />} onClick={toggleTheme} />
    </nav>
  );
};

export default Navbar;