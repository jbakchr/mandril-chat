import React from "react";

export const MainContent = ({ children, styles }) => {
  return (
    <div
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
