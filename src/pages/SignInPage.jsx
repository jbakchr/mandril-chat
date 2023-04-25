import { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../context/GlobalContext";
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
  const { submitUser } = useContext(GlobalContext);
  const inputRef = useRef();
  const [avatarImg, setAvatarImg] = useState(null);

  const submitAvatar = () => {
    const userData = {
      name: inputRef.current.value,
      avatarImg,
      id: uuidv4(),
    };

    submitUser(userData);
  };

  return (
    <MainLayout>
      <Navbar />
      <MainContent styles={mainContentStyle}>
        <AvatarHeader />
        <Divider />
        <AvatarImage avatarImg={avatarImg} />
        <AvatarSection>
          <AvatarSubHeader headerText="Step #1 : Indtast avatar navn" />
          <AvatarNameInput inputRef={inputRef} />
        </AvatarSection>
        <AvatarSection>
          <AvatarSubHeader headerText="Step #2 : Vælg din avatar" />
          <AvatarImageList setAvatarImg={setAvatarImg} />
        </AvatarSection>
      </MainContent>
      <Footer>
        <AvatarButton submitAvatar={submitAvatar} />
      </Footer>
    </MainLayout>
  );
};
