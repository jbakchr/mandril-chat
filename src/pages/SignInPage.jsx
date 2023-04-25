import { useRef } from "react";

import { MainLayout } from "../layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../layout/MainContent";
import { AvatarHeader } from "../components/avatar/AvatarHeader";
import { Divider } from "../components/avatar/Divider";
import { AvatarImage } from "../components/avatar/AvatarImage";
import { AvatarSection } from "../components/avatar/AvatarSection";
import { AvatarSubHeader } from "../components/avatar/AvatarSubHeader";
import { AvatarNameInput } from "../components/avatar/AvatarNameInput";
import { AvatarImageList } from "../components/avatar/AvatarImageList";
import { Footer } from "../components/footer/Footer";
import { AvatarButton } from "../components/avatar/AvatarButton";

const mainContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const SignInPage = () => {
  const inputRef = useRef();

  const submitAvatar = () => {
    console.log(inputRef.current.value);
  };

  return (
    <MainLayout>
      <Navbar />
      <MainContent styles={mainContentStyle}>
        <AvatarHeader />
        <Divider />
        <AvatarImage />
        <AvatarSection>
          <AvatarSubHeader headerText="Step #1 : Indtast avatar navn" />
          <AvatarNameInput inputRef={inputRef} />
        </AvatarSection>
        <AvatarSection>
          <AvatarSubHeader headerText="Step #2 : Vælg din avatar" />
          <AvatarImageList />
        </AvatarSection>
      </MainContent>
      <Footer>
        <AvatarButton submitAvatar={submitAvatar} />
      </Footer>
    </MainLayout>
  );
};
