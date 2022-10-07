import React from "react";
import { Container, Wrapper } from "../Shared";
import {
  Section,
  Navigation,
  NavigationItem,
  News,
  I,
  InputContainer,
  Input,
  Icons,
  TextSection,
  SmallText,
} from "./FooterElements";
import EastIcon from "@mui/icons-material/East";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForumIcon from "@mui/icons-material/Forum";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Navigation>
            <NavigationItem>about monstercat</NavigationItem>
            <NavigationItem>contact us</NavigationItem>
            <NavigationItem>careers</NavigationItem>
            <NavigationItem>news</NavigationItem>
            <NavigationItem>press</NavigationItem>
            <NavigationItem>terms of service</NavigationItem>
            <NavigationItem>privacy policy</NavigationItem>
          </Navigation>
          <News>
            <NavigationItem>Monstercat news</NavigationItem>
            <I>
              Don't miss a thing, stay up to date with the latest news from us.
            </I>
            <InputContainer>
              <Input placeholder="Enter email"></Input>
              <EastIcon className="icon" />
            </InputContainer>
          </News>
        </Section>
        <Section style={{ justifyContent: "space-between" }}>
          <I className="copyright">
            2011 - 2022 © Monstercat, All Rights Reserved
          </I>
          <Icons>
            <YouTubeIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <ForumIcon className="icon" />
            <AppleIcon className="icon" />
            <FacebookIcon className="icon" />
          </Icons>
        </Section>{" "}
        <TextSection>
          <SmallText>
            We acknowledge with gratitude the traditional, ancestral and unceded
            land of the Coast Salish peoples, including the territories of the
            Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
            (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
            Monstercat's Vancouver HQ stands.
          </SmallText>
        </TextSection>
        <TextSection>
          <SmallText>
            We acknowledge the unceded and ancestral territories of the
            Gabrielino/Tongva peoples on which our LA team live and work.
          </SmallText>
        </TextSection>
      </Wrapper>
    </Container>
  );
};

export default Footer;
