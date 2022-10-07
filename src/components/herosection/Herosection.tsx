import React from "react";
import { Wrapper, H1 } from "../Shared";
import {
  Container,
  Main,
  ImgContainer,
  Text,
  Img,
  About,
  Title,
  P,
  Buttons,
  Button,
} from "./HerosectionElements";
import cover from "../../img/600.webp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";

const Herosection = () => {
  return (
    <Container img={cover}>
      <Wrapper>
        <Main>
          <ImgContainer>
            <Img src={cover} size="480px"></Img>
            <Text>
              <span>Instinct</span> — Released May 22, 2020
            </Text>
          </ImgContainer>
          <About>
            <Title>
              <H1>LEVEL DAYS</H1>
              <P>CONRO</P>
            </Title>
            <Buttons>
              <Button bg="#50A584" border="#50A584">
                <PlayArrowOutlinedIcon className="icon play" />
                Listen now
              </Button>
              <Button bg="transparent" border="white">
                <ShareOutlinedIcon className="icon share" />
                Share
              </Button>
            </Buttons>
          </About>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Herosection;
