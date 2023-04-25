import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const SignInPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <div style={{ flexGrow: 1 }}>Blah</div>
      <Footer />
    </MainLayout>
  );
};
