import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const submitUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <GlobalContext.Provider value={{ user, submitUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
