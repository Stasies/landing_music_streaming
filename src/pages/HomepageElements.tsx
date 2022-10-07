import styled from "styled-components";

export const PageContainer = styled.div<{ img: string }>`
  margin-bottom: 32px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 50vh,
    rgba(0, 0, 0, 1) 100vh
  );
  &::after {
    content: "";
    width: 103%;
    height: 100vh;
    background-color: black;
    background-size: cover;
    background-position: 50% 50%;
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.img});
    filter: blur(5px);
    -webkit-filter: blur(5px);
    z-index: -1;
  }
`;
