import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../../Service";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(useAuth);

  return context;
};

const setLocalStorageUser = (user) => {
  localStorage.setItem("Sou:user", JSON.stringify(user));
};

const getLocalStorageUser = () => {
  const localUser = localStorage.getItem("Sou:user");
  if (!localUser) {
    return null;
  }
  const user = JSON.parse(localUser);

  return user;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = getLocalStorageUser();
    if (user) {
      setUser(user);
    }
  }, []);

  const LoginRequest = async (email, password) => {
    try {
      const request = await Api.post("login, {email, password");
    } catch (error) {
      return null;
    }
  };

  const authenticate = async (email, password) => {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };
    setUser(payload);
    setLocalStorageUser(payload);
  };

  const logout = () => {
    setUser(null);
    setLocalStorageUser(null);
  };

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
