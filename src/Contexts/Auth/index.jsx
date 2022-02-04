import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
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
        })
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
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.getItem("@SouVoluntario:token")) {
      if (
        location.pathname !== "/" ||
        location.pathname !== "/login" ||
        location.pathname !== "/register"
      ) {
        history.push("/");
      }
    } else if (
      user.userType === "voluntary" &&
      location.pathname.toLowerCase() === "/dashboardong"
    ) {
      history.push("dashboarduser");
    } else if (
      user.userType === "ong" &&
      location.pathname.toLowerCase() === "/dashboarduser"
    ) {
      history.push("/dashboardong");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, user, accessToken, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
