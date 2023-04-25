import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
