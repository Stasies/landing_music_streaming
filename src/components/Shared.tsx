import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-bottom: 96px;
  box-sizing: border-box;
  overflow-x: hidden;
`;
export const Wrapper = styled.div`
  width: 1200px;
  padding: 0 26px;
  box-sizing: border-box;
  overflow-x: hidden;
  @media screen and (max-width: 1200px) {
    width: 992px;
  }
  @media screen and (max-width: 992px) {
    width: 768px;
    padding: 0 16px;
  }
  @media screen and (max-width: 768px) {
    width: 532px;
  }
  @media screen and (max-width: 532px) {
    max-width: 532px;
  }
`;
export const H1 = styled.h1`
  font-size: 48px;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  stroke: 2px solid white;
  letter-spacing: 4px;

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 1px;

  color: transparent;
  @media screen and (max-width: 992px) {
    font-size: 32px;
  }
`;
export const H2 = styled.h2`
  font-size: 45px;
  text-transform: uppercase;
  margin: 0 0 50px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.color};
  @media screen and (max-width: 992px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 532px) {
    font-size: 20px;
    letter-spacing: 1px;
  }
`;
export const Button = styled.button``;
