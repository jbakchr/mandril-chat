import React from "react";

export const AvatarNameInput = ({ inputRef }) => {
  return (
    <input
      type="text"
      style={{
        width: "100%",
        height: "30px",
        outline: "none",
      }}
      placeholder="Skriv avatar navn her.."
      ref={inputRef}
    />
  );
};
