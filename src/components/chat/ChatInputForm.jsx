import { useRef, useEffect } from "react";

import { saveChatMessage } from "../../firebase/db";

export const ChatInputForm = ({ user }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitChatMessage = () => {
    const msg = inputRef.current.value;
    saveChatMessage(msg, user);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        border: "1px solid black",
        width: "90%",
        height: "40px",
        display: "flex",
        padding: "5px",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <input
        type="text"
        style={{ flexGrow: 1, border: "none", outline: "none" }}
        ref={inputRef}
      />
      <button
        style={{
          borderRadius: "20px",
          fontFamily: "Lobster Two",
          fontSize: "17px",
          color: "#01a75b",
          backgroundColor: "#ffd32a",
          letterSpacing: "2px",
          padding: "0px 10px",
          boxShadow: "1px 1px black",
        }}
        onClick={submitChatMessage}
      >
        Send
      </button>
    </div>
  );
};
