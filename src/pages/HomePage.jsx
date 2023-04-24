import { Navbar } from "../components/navbar/Navbar";

export const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <p style={{ flexGrow: 1 }}>Chat messages list</p>
      <p>Footer</p>
    </div>
  );
};
