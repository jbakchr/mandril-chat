import React from "react";

export const AvatarContent = ({ children }) => {
  return (
    <div
      style={{
        flexGrow: 1,
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};
