import React from "react";

export const MainContent = ({ children, styles }) => {
  return (
    <div
      id="main-content"
      style={{
        flexGrow: 1,
        marginTop: "50px",
        paddingBottom: "55px",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
