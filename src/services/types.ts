import { Dispatch, SetStateAction, type ReactNode } from "react";

export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
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
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type CloudData = {
  position: { x: number; y: number; z: number };
  speed: number;
  opacity: number;
};
