import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { ChatMessagesList } from "../components/chat/ChatMessagesList";
import { Footer } from "../components/footer/Footer";
import { SignInButton } from "../components/buttons/SignInButton";
import { MainContent } from "../layout/MainContent";

export const HomePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <ChatMessagesList />
      </MainContent>
      <Footer>
        <SignInButton />
      </Footer>
    </MainLayout>
  );
};
