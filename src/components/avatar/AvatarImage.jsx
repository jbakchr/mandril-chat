import React from "react";
import { AvatarImagePlaceholder } from "./AvatarImagePlaceholder";

const imgStyle = {
  border: "1px solid black",
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  flexDirection: "column",
  backgroundColor: "lightgray",
};

export const AvatarImage = ({ avatarImg }) => {
  const renderImage = () => {
    if (avatarImg) {
      return <img src={`/images/${avatarImg.url}`} style={imgStyle} />;
    }

    return <AvatarImagePlaceholder />;
  };

  return <div style={imgStyle}>{renderImage()}</div>;
};
