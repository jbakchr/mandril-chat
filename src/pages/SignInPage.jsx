import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { AvatarContent } from "../components/avatar/AvatarContent";
import { Footer } from "../components/footer/Footer";
import { AvatarHeader } from "../components/avatar/AvatarHeader";

export const SignInPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <AvatarContent>
        <AvatarHeader />
      </AvatarContent>
      <Footer />
    </MainLayout>
  );
};
