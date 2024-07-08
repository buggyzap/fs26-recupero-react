import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) setUser(JSON.parse(localUser));
  }, []);

  function userExistance(email, password) {
    return email === "fr4.b4.og4@gmail.com" && password === "Fr4nc1oo";
  }

  const userLogin = (email, password) => {
    if (!userExistance(email, password)) {
      return false;
    }
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
    return true
  }
  const userLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }
  return <AuthContext.Provider value={{user, userLogin, userLogout}}>{children}</AuthContext.Provider>
};
