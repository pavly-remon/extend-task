import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Navbar.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

const Navbar: FC = () => {
  const loc = useLocation();

  const theme = useSelector((state: RootState) => state.theme.theme);
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
      <ThemeSwitcher/>
    </nav>
  );
};

export default Navbar;