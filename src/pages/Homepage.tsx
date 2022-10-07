import React, { useState } from "react";
import Herosection from "../components/herosection/Herosection";
import Stream from "../components/stream/Stream";
import Tracklist from "../components/tracklist/Tracklist";
import Video from "../components/video/Video";
import Footer from "../components/footer/Footer";
import { PageContainer } from "./HomepageElements";
import Navigation from "../components/navigation/Navigation";
import cover from "../img/600.webp";
import Menu from "../components/menu/Menu";

const Homepage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <PageContainer img={cover}>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      <Navigation setOpenMenu={setOpenMenu} />
      <Herosection />
      <Stream />
      <Tracklist />
      <Video />
      <Footer />
    </PageContainer>
  );
};

export default Homepage;
