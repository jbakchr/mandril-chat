import React from "react";

export const ChatMessage = ({ chat, user }) => {
  let flexDirection = "row";

  if (user) {
    flexDirection = chat.user.id === user.id ? "row-reverse" : "row";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        alignItems: "center",
      }}
    >
      <img
        src={`/images/${chat.user.avatarImg.url}`}
        alt={`/images/${chat.user.avatarImg.altText}`}
        style={{ width: "25px", borderRadius: "50%", margin: "2px 4px" }}
      />
      <p style={{ fontSize: "13px" }}>{chat.msg}</p>
    </div>
  );
};
