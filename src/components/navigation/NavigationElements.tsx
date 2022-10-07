import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 72px;
  z-index: 10;
  .icon {
    color: ${({ theme }) => theme.color};
    stroke: white;
    stroke-width: 0.1;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .menu {
    margin-top: 36px;
    margin-bottom: 56px;
    width: 28px;
    height: 32px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: row;
    align-items: center;
    top: 0;
    width: 100%;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 70px;
    .menu {
      margin: 0;
      position: absolute;
      right: 20px;
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (max-width: 992px) {
    flex-direction: row;
  }
`;
