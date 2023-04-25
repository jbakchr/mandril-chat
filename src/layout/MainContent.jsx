import React from "react";

export const MainContent = ({ children }) => {
  return (
    <div style={{ flexGrow: 1, marginTop: "50px", paddingBottom: "50px" }}>
      {children}
    </div>
  );
};
