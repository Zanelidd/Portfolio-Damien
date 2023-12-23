import { NavLink } from "react-router-dom";
import style from "./styles/BugerNavBar.module.css";
import Hamburger from "hamburger-react";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { useContext } from "react";
import { BurgerType, DarkModeContextType } from "../services/types";

const BurgerNavBar = ({ isOpen, setIsOpen }: BurgerType) => {
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);
  return (
    <nav className={style.burger_navBar}>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        color={darkMode ? " #FFFFFF" : "#000"}
      />

      <NavLink
        to="/home"
        className={style.linkNavBar}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/projects"
        className={style.linkNavBar}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Projets
      </NavLink>
      <NavLink
        to="/contact"
        className={style.linkNavBar}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default BurgerNavBar;
