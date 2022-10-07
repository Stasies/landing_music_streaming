import React from "react";
import {
  Container,
  Section,
  Right,
  Song,
  Title,
  Singer,
  Duration,
} from "./SingleTrackElements";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   far,
//   faShareSquare,
//   faPlayCircle,
// } from "@fortawesome/free-regular-svg-icons";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";

type pageProps = {
  n: number;
  song: {
    title: string;
    group: string;
    duration: string;
  };
};
const SingleTrack = ({ n, song }: pageProps) => {
  return (
    <Container>
      <Section>
        {n + 1}
        <PlayArrowOutlinedIcon className="icon play" />
        <Song>
          <Title>{song.title}</Title>
          <Singer>{song.group}</Singer>
        </Song>
      </Section>
      <Right>
        <Duration>{song.duration}</Duration>
        <ShareOutlinedIcon className="icon" />
      </Right>
    </Container>
  );
};

export default SingleTrack;
