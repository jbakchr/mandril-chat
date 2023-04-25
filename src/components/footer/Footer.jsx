export const Footer = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#0098c5",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50px",
      }}
    >
      {children}
    </div>
  );
};
