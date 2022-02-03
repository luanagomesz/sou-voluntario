import { createContext, useContext, useState } from "react";

export const BurgerContext = createContext();

export const useBurger = () => {
  const context = useContext(BurgerContext);

  return context;
};

export const BurgerProvider = ({ children }) => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <BurgerContext.Provider value={{ toggleBurger, burger }}>
      {children}
    </BurgerContext.Provider>
  );
};
