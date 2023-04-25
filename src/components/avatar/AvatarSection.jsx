export const AvatarSection = ({ children }) => {
  return (
    <div
      style={{
        margin: "10px 0px",
        border: "1px solid black",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
