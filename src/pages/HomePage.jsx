import { Navbar } from "../components/navbar/Navbar";
import { ChatMessagesList } from "../components/chat/ChatMessagesList";
import { Footer } from "../components/footer/Footer";
import { SignInButton } from "../components/buttons/SignInButton";

export const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <ChatMessagesList />
      <Footer>
        <SignInButton />
      </Footer>
    </div>
  );
};
