import styled from "styled-components";

export const Container = styled.div<{ img: string }>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 1200px) {
    height: fit-content;
  }
`;

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 112px 0 80px;
  padding: 80px 20px 0;
  gap: 60px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 0;
    gap: 16px;
  }
`;
export const Text = styled.div`
  transform-origin: top left;
  left: 0;
  bottom: 4px;
  font-style: italic;
  transform: rotate(-90deg) translateY(-40%);
  position: absolute;
  color: ${({ theme }) => theme.color};
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  span {
    color: #50a584;
    font-weight: 600;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    transform: rotate(0);
    margin: 48px 0 0;
    font-size: 14px;
    position: initial;
  }
`;
export const ImgContainer = styled.div`
  width: fit-content;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0;
  }
`;

export const Img = styled.img<{ size: string }>`
  width: 480px;
  aspect-ratio: 1 1;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
export const About = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  margin-bottom: 60px;
`;
export const P = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  padding: 0;
  margin: 0;
  @media screen and (max-width: 992px) {
    font-size: 28px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const Button = styled.a<{ bg: string; border: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${(props) => props.border};
  font-size: 14px;
  padding: 10px 24px;
  font-family: "MonumentExtended-Regular";
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  .share {
    width: 18px;
    margin-right: 6px;
  }
  .play {
    width: 32px;
    height: 28px;
  }
  &:hover {
    background-color: white;
    border-color: white;
    color: black;
  }
`;
