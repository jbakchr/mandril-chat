export const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {children}
    </div>
  );
};
