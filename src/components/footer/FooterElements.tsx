import styled from "styled-components";
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid white;
  color: ${({ theme }) => theme.color};
  padding: 52px 0 52px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Navigation = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 140px;
  gap: 10px;
  letter-spacing: 2px;
  font-size: 18px;
  text-transform: uppercase;
  @media screen and (max-width: 992px) {
    height: 170px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: fit-content;
  }
`;
export const News = styled.div`
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 18px;
  text-transform: uppercase;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  i {
    color: ${({ theme }) => theme.color};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 60px;
  }
`;
export const NavigationItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  @media screen and (max-width: 532px) {
    max-width: 100%;
  }
`;
export const I = styled.i`
  letter-spacing: 2px;
  font-weight: light;
  font-family: "Montserrat", sans-serif;
  text-transform: none;
  margin: 10px 0 24px;
  font-size: 16px;
  line-height: 28px;
  &.copyright {
    margin-top: 0;
  }
`;
export const InputContainer = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .icon {
    width: auto;
    height: 16px;
    stroke: white;
    stroke-width: 0.1px;
    margin-right: 24px;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  padding: 16px 0;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const TextSection = styled.div`
  color: ${({ theme }) => theme.color};
  margin: auto;
  width: 60%;
  text-align: center;
  margin-bottom: 16px;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SmallText = styled.small`
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  text-align: center;
`;
