import React from "react";
import { Container, Wrapper, H2 } from "../Shared";
import styled from "styled-components";

const VideoPlayer = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
`;

const Video = () => {
  return (
    <Container>
      <Wrapper>
        <H2>music video</H2>
        <VideoPlayer
          src="https://www.youtube.com/embed/7nObtWENgxA"
          title="Conro - Therapy [Monstercat Lyric Video]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Wrapper>
    </Container>
  );
};

export default Video;
