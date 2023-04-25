import { useRef } from "react";

export const ChatInputForm = ({ user }) => {
  const inputRef = useRef();

  console.log(user);

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
        onClick={() => console.log(inputRef.current.value)}
      >
        Send
      </button>
    </div>
  );
};
