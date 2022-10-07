import styled from "styled-components";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  padding-right: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  .play {
    stroke-width: 0.1;
    stroke: white;
    width: 38px;
    height: 38px;
  }
  font-size: 18px;
`;
export const Song = styled.div`
  font-weight: 600;
`;
export const Title = styled.div`
  font-size: 18px;
`;
export const Singer = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;
export const Right = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;
export const Duration = styled.p`
  margin: 0;
  padding: 0;
`;
