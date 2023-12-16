import { createContext } from "react";
import { DarkModeContextType } from "../services/types";

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});
