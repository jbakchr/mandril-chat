import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { ChatMessagesList } from "../components/chat/ChatMessagesList";
import { Footer } from "../components/footer/Footer";
import { SignInButton } from "../components/buttons/SignInButton";

export const HomePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <ChatMessagesList />
      <Footer>
        <SignInButton />
      </Footer>
    </MainLayout>
  );
};
