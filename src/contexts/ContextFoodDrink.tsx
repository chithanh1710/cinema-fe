"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface cart {
  quantity: number;
  id: number;
  price: number;
}

interface FoodDrinkProps {
  listCart: cart[];
  setListCart: Dispatch<SetStateAction<cart[]>>;
}

const foodDrinkContext = createContext<FoodDrinkProps | undefined>(undefined);

export const FoodDrinkProvider = ({ children }: { children: ReactNode }) => {
  const [listCart, setListCart] = useState<cart[]>([]);
  const value: FoodDrinkProps = {
    listCart,
    setListCart,
  };
  return (
    <foodDrinkContext.Provider value={value}>
      {children}
    </foodDrinkContext.Provider>
  );
};

export const useFoodDrink = () => {
  const context = useContext(foodDrinkContext);
  if (!context) throw new Error("Menu Context Error");
  return context;
};
