import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log("user is:", user);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
