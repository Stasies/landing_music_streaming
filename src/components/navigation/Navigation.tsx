import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForumIcon from "@mui/icons-material/Forum";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Container, Icons } from "./NavigationElements";
const Navigation = ({ setOpenMenu }: any) => {
  return (
    <Container>
      <MenuIcon className="icon menu" onClick={() => setOpenMenu(true)} />
      <Icons>
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
        <ForumIcon className="icon" />
        <FacebookIcon className="icon" />
      </Icons>
    </Container>
  );
};

export default Navigation;
