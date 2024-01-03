import { ReactThreeFiber } from "@react-three/fiber";
import { Dispatch, SetStateAction, type ReactNode } from "react";
import THREE from "three";

export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export type ChildrenProps = {
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

export type CloudProps = JSX.IntrinsicElements["group"] & {
  ref: React.Ref<ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>>;
  position: { x: number; y: number; z: number };
};
