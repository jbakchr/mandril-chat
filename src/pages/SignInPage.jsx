import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { AvatarContent } from "../components/avatar/AvatarContent";
import { Footer } from "../components/footer/Footer";

export const SignInPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <AvatarContent />
      <Footer />
    </MainLayout>
  );
};
