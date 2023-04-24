import { Navbar } from "../components/navbar/Navbar";
import { ChatMessagesList } from "../components/chat/ChatMessagesList";
import { Footer } from "../components/footer/Footer";

export const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <ChatMessagesList />
      <Footer />
    </div>
  );
};
