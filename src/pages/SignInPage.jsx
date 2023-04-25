import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { AvatarHeader } from "../components/avatar/AvatarHeader";
import { MainContent } from "../layout/MainContent";

const mainContentStyle = { display: "flex", justifyContent: "center" };

export const SignInPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent styles={mainContentStyle}>
        <AvatarHeader />
      </MainContent>
      <Footer />
    </MainLayout>
  );
};
