import { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../layout/MainContent";
import { ChatMessagesList } from "../components/chat/ChatMessagesList";
import { Footer } from "../components/footer/Footer";
import { SignInButton } from "../components/buttons/SignInButton";

export const HomePage = () => {
  const { user } = useContext(GlobalContext);
  console.log("user:", user);

  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <ChatMessagesList />
      </MainContent>
      <Footer>{!user ? <SignInButton /> : <p>Show input</p>}</Footer>
    </MainLayout>
  );
};
