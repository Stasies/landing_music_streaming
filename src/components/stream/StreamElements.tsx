import styled from "styled-components";

export const Table = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: row;
`;
export const Td = styled.div`
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  border: 1px solid white;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 20px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  justify-content: center;
  cursor: pointer;
  &:last-child {
    .icon {
      rotate: -90deg;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 8px 12px;
    .icon {
      width: 20px;
    }
  }
`;
