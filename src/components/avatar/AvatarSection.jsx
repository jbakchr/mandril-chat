export const AvatarSection = ({ children }) => {
  return (
    <div
      style={{
        marginTop: "20px",
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
