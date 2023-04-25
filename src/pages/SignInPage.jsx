import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { AvatarHeader } from "../components/avatar/AvatarHeader";
import { MainContent } from "../layout/MainContent";
import { Divider } from "../components/avatar/Divider";
import { AvatarImage } from "../components/avatar/AvatarImage";
import { AvatarSection } from "../components/avatar/AvatarSection";
import { AvatarSubHeader } from "../components/avatar/AvatarSubHeader";
import { AvatarNameInput } from "../components/avatar/AvatarNameInput";

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
        <AvatarSection>
          <AvatarSubHeader headerText="Step #1 : Indtast avatar navn" />
          <AvatarNameInput />
        </AvatarSection>
        <AvatarSection>
          <AvatarSubHeader headerText="Step #2 : Vælg din avatar" />
        </AvatarSection>
      </MainContent>
      <Footer />
    </MainLayout>
  );
};
