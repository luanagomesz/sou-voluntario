import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const RedirectContext = createContext({});

const RedirectProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("@SouVoluntario:token");
    if (!token) {
      if (
        location.pathname !== "/" ||
        location.pathname !== "/login" ||
        location.pathname !== "/register"
      ) {
        history.push("/");
      }
    } else if (token) {
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/register"
      ) {
        history.goBack();
      }
    }
  }, []);

  return (
    <RedirectContext.Provider value={{}}>{children}</RedirectContext.Provider>
  );
};

const useRedirect = () => useContext(RedirectContext);

export { RedirectProvider, useRedirect };
