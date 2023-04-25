import React from "react";
import { AvatarImagePlaceholder } from "./AvatarImagePlaceholder";

export const AvatarImage = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "150px",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        flexDirection: "column",
        backgroundColor: "lightgray",
      }}
    >
      <AvatarImagePlaceholder />
    </div>
  );
};
