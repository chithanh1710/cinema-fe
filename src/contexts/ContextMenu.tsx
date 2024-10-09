"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MenuProps {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

const menuContext = createContext<MenuProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenu, setIsMenu] = useState(false);
  const value: MenuProps = {
    isMenu,
    setIsMenu,
  };
  return <menuContext.Provider value={value}>{children}</menuContext.Provider>;
};

export const useMenu = () => {
  const context = useContext(menuContext);
  if (!context) throw new Error("Menu Context Error");
  return context;
};
