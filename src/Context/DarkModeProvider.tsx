import { createContext, useState } from "react";
import { ChildrenProps, DarkModeContextType } from "../services/types";

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export function DarkModeProvider({ children }: ChildrenProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
