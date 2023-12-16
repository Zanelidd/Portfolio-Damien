import { useContext, useState } from "react";
import NavBar from "./NavBar";
import style from "./styles/Header.module.css";
import Hamburger from "hamburger-react";
import BurgerNavBar from "./BurgerNavBar";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { DarkModeContextType } from "../services/types";

const Header = () => {
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        darkMode ? style.dark_header_container : style.header_container
      }
    >
      <div className={style.navBarContainer}>
        <NavBar />
      </div>
      <div className={style.burger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        {isOpen && <BurgerNavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Header;
