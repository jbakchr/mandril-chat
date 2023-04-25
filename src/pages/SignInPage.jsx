import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { AvatarHeader } from "../components/avatar/AvatarHeader";
import { MainContent } from "../layout/MainContent";

export const SignInPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <AvatarHeader />
      </MainContent>
      <Footer />
    </MainLayout>
  );
};
