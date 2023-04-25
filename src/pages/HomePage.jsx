import { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../layout/MainContent";
import { ChatMessagesList } from "../components/chat/ChatMessagesList";
import { Footer } from "../components/footer/Footer";
import { SignInButton } from "../components/buttons/SignInButton";
import { ChatInputForm } from "../components/chat/ChatInputForm";

export const HomePage = () => {
  const { user } = useContext(GlobalContext);

  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <ChatMessagesList />
      </MainContent>
      <Footer>
        {!user ? <SignInButton /> : <ChatInputForm user={user} />}
      </Footer>
    </MainLayout>
  );
};
