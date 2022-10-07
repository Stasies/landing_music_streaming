import React from "react";
import { Container, Wrapper, H2 } from "../Shared";
import { Tracks } from "./TracklistElements";
import SingleTrack from "./components/SingleTrack";

const songs = [
  {
    title: "The Small Things",
    group: "Conro",
    duration: "3:35",
  },
  {
    title: "Without Your Love",
    group: "Conro",
    duration: "3:09",
  },
  {
    title: "Therapy",
    group: "Conro",
    duration: "3:06",
  },
  {
    title: "Fighters",
    group: "Conro",
    duration: "3:46",
  },
  {
    title: "Way up",
    group: "Conro",
    duration: "3:32",
  },
  {
    title: "Waiting",
    group: "Conro",
    duration: "3:07",
  },
  {
    title: "Dreaming",
    group: "Conro",
    duration: "2:57",
  },
  {
    title: "Tattoo",
    group: "Conro",
    duration: "3:29",
  },
  {
    title: "Out for the Night",
    group: "Conro",
    duration: "3:05",
  },
  {
    title: "Overdue",
    group: "Conro",
    duration: "2:48",
  },
  {
    title: "Say it",
    group: "Conro",
    duration: "3:04",
  },
  {
    title: "Here to Stay",
    group: "Conro",
    duration: "2:44",
  },
];

const Tracklist = () => {
  return (
    <Container>
      <Wrapper>
        <H2>Track list</H2>
        <Tracks>
          {songs.map(
            (
              song: { title: string; group: string; duration: string },
              index: number
            ) => (
              <SingleTrack n={index} song={song} />
            )
          )}
        </Tracks>
      </Wrapper>
    </Container>
  );
};

export default Tracklist;
