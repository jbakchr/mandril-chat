import React from "react";

export const AvatarSubHeader = ({ headerText }) => {
  return (
    <>
      <h3
        style={{
          fontFamily: "Lobster Two",
          color: "gray",
          letterSpacing: "2px",
        }}
      >
        {headerText}
      </h3>
    </>
  );
};
