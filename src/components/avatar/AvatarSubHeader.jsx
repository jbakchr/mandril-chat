import React from "react";

export const AvatarSubHeader = ({ headerText }) => {
  return (
    <>
      <h3
        style={{
          fontFamily: "Lobster Two",
          color: "gray",
          letterSpacing: "2px",
          paddingBottom: "5px",
        }}
      >
        {headerText}
      </h3>
    </>
  );
};
