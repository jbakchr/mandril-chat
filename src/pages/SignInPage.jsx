import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { AvatarHeader } from "../components/avatar/AvatarHeader";
import { MainContent } from "../layout/MainContent";
import { Divider } from "../components/avatar/Divider";
import { AvatarImage } from "../components/avatar/AvatarImage";
import { AvatarSection } from "../components/avatar/AvatarSection";

const mainContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const SignInPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent styles={mainContentStyle}>
        <AvatarHeader />
        <Divider />
        <AvatarImage />
        <AvatarSection />
      </MainContent>
      <Footer />
    </MainLayout>
  );
};
