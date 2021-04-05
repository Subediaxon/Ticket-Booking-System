import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

const UserContext = createContext(null);
const { Provider } = UserContext;

//Creating a function to create tokens during signup and login
const UserContextProvider = ({ children }) => {
  const history = useHistory();

  const [userData, setUserData] = useState(() => ({
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {},
    token: localStorage.getItem("token") || null,
    expiresAt: localStorage.getItem("expiresAt") || null,
  }));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");
    setUserData({ userInfo: {}, token: null, expiresAt: null });
    history.push("/login");
  };

  //function to check if the route is authenticated- used for login
  const isAuthenticated = () => {
    if (!userData.token || !userData.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < userData.expiresAt;
  };

  //function to save user info during login
  const setUserContext = ({ userInfo, token, expiresAt }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresAt", expiresAt);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUserData({ userInfo, token, expiresAt });
  };

  //function to check "admin" during login
  const isAdmin = () => {
    return userData.userInfo.role === "admin";
  };

  return (
    <Provider
      value={{ userData, setUserContext, logout, isAuthenticated, isAdmin }}
    >
      {children}
    </Provider>
  );
};

export { UserContextProvider, UserContext };
