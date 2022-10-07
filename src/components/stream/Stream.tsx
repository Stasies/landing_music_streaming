import React from "react";
import { Container, Wrapper, H2 } from "../Shared";
import { Table, Td } from "./StreamElements";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import CloudIcon from "@mui/icons-material/Cloud";
import ExploreIcon from "@mui/icons-material/Explore";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import ContactlessRoundedIcon from "@mui/icons-material/ContactlessRounded";

const Stream = () => {
  return (
    <Container>
      <Wrapper>
        <H2>STREAM IT YOUR WAY</H2>
        <Table>
          <Td>
            <HeadphonesRoundedIcon className="icon" />
            player
          </Td>
          <Td>
            <ExploreIcon className="icon" />
          </Td>
          <Td>
            <CloudIcon className="icon" />
          </Td>
          <Td>
            <AppleIcon className="icon" />
          </Td>
          <Td>
            <YouTubeIcon className="icon" />
          </Td>
          <Td>
            <ContactlessRoundedIcon className="icon" />
          </Td>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Stream;
