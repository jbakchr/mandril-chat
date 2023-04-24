import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <p style={{ border: "1px solid black", height: "400px" }}>
          Chat message
        </p>
        <p style={{ border: "1px solid black", height: "400px" }}>
          Chat message
        </p>
        <p style={{ border: "1px solid black", height: "400px" }}>
          Chat message
        </p>
        <p style={{ border: "1px solid black", height: "400px" }}>
          Chat message
        </p>
      </div>
      <Footer />
    </div>
  );
};
