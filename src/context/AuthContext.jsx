import { createContext, useEffect } from "react";

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

  function userLogin(email, password) {
    if (userExistance(email, password)) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
    }
  }
};
