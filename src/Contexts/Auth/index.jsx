import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../../Service";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const getLocalStorageUser = () => {
  const user = JSON.parse(localStorage.getItem("@SouVoluntario:user"));
  return user ? user : {};
};

const getLocalStorageToken = () => {
  const token = localStorage.getItem("@SouVoluntario:token");
  return token ? token : "";
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getLocalStorageUser);

  const [accessToken, setAccessToken] = useState(getLocalStorageToken);

  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("@SouVoluntario:token");
    return token ? true : false;
  });

  const login = useCallback(async (email, password) => {
    try {
      const response = await api.post("login", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem(
        "@SouVoluntario:user",
        JSON.stringify({
          name: user.name,
          id: user.id,
          userType: user.userType,
        }),
      );
      localStorage.setItem("@SouVoluntario:token", String(accessToken));

      setUser(user);
      setAccessToken(accessToken);
      setIsAuth(true);

      return response.data;
    } catch (error) {
      return error;
    }
  });

  const logout = () => {
    localStorage.removeItem("@SouVoluntario:token");
    localStorage.removeItem("@SouVoluntario:user");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, accessToken, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
