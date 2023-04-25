import React from "react";

export const ChatMessage = ({ chat, user }) => {
  console.log("chat:", chat);
  console.log("user:", user);

  let flexDirection = "row";

  if (user) {
    flexDirection = chat.user.id === user.id ? "row-reverse" : "row";
  }

  return (
    <div style={{ display: "flex", flexDirection: flexDirection }}>
      <p>img here</p>
      <p>Chat here</p>
    </div>
  );
};
