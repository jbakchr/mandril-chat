import { NavbarHeader } from "./NavbarHeader";

const navbarStyle = {
  backgroundColor: "#0098c5",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <p>logo</p>
      <NavbarHeader />
      <p>user</p>
    </div>
  );
};
