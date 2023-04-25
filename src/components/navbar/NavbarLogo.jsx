import React from "react";

export const NavbarLogo = ({ hidden }) => {
  let styles;

  if (hidden) {
    styles = {
      visibility: "hidden",
    };
  }

  return (
    <div
      style={{
        height: "40px",
        width: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
        ...styles,
      }}
    >
      <p>Logo</p>
    </div>
  );
};
