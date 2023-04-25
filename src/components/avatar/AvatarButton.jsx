import React from "react";

export const AvatarButton = ({ submitAvatar }) => {
  return (
    <button
      style={{
        height: "40px",
        padding: "0px 10px",
        backgroundColor: "#ffd32a",
        borderRadius: "50px",
        fontFamily: "Lobster Two",
        fontSize: "17px",
        letterSpacing: "2px",
        color: "#01a75b",
      }}
      onClick={submitAvatar}
    >
      Sæt avatar
    </button>
  );
};
