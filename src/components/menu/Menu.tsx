import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForumIcon from "@mui/icons-material/Forum";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Container,
  MenuTop,
  Title,
  MenuNavigation,
  Navigation,
  NavItem,
  Icons,
  MenuBottom,
  Buttons,
  Button,
} from "./MenuElements";
import CloseIcon from "@mui/icons-material/Close";

const Menu = ({ setOpenMenu }: any) => {
  return (
    <Container>
      <MenuTop>
        <Title>monstercat</Title>
        <CloseIcon className="close" onClick={() => setOpenMenu(false)} />
      </MenuTop>
      <MenuNavigation>
        <Navigation>
          <NavItem>Music</NavItem>
          <NavItem>artists</NavItem>
          <NavItem>about</NavItem>
          <NavItem>news</NavItem>
          <NavItem>events</NavItem>
          <NavItem>programming</NavItem>
          <NavItem>gold</NavItem>
          <NavItem>partners</NavItem>
          <NavItem>press</NavItem>
          <NavItem>player</NavItem>
          <NavItem>shop</NavItem>
          <NavItem>lost civilization</NavItem>
        </Navigation>
      </MenuNavigation>
      <MenuBottom>
        <Icons>
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <ForumIcon className="icon" />
          <FacebookIcon className="icon" />
        </Icons>
        <Buttons>
          <Button>Sign in</Button>
          <Button>or sign up</Button>
        </Buttons>
      </MenuBottom>
    </Container>
  );
};

export default Menu;
