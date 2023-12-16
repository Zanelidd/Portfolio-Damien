import { Vector3 } from "three/src/Three.js";
import { type ReactNode } from "react";

export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export type ChildernProps = {
  children: ReactNode;
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  skillsValue: string[];
};

export type BurgerType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type CloudData = {
  position: Vector3;
  speed: number;
  opacity: number;
};
