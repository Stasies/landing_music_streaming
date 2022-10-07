import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  height: 100vh;
  position: fixed;
  width: 420px;
  padding: 0 32px;
  box-sizing: border-box;
  right: 0;
  z-index: 11;
  color: ${({ theme }) => theme.color};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const MenuTop = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .close {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  font-size: 26px;
  font-family: "Montserrat";
  font-weight: 600;
`;
export const MenuNavigation = styled.div`
  overflow-y: auto;
  height: calc(100vh - 260px);
`;
export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 42px 0;
`;
export const NavItem = styled.div`
  text-transform: uppercase;
  font-size: 18.5px;
  cursor: pointer;
  letter-spacing: 1px;
`;
export const MenuBottom = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: sticky;
  bottom: 0;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Button = styled.a`
  text-decoration: none;
  color: white;
  background-color: transparent;
  padding: 6px 16px;
  text-transform: uppercase;
  cursor: pointer;
  &:first-child {
    border: 1px solid white;
  }
`;
