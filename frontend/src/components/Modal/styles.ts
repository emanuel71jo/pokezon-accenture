import styled from "styled-components";
import { handleBackgroundType } from "../../utils/handleBackgroundType";

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border: none;
  z-index: 100000;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 28rem;
  width: 28rem;
  border-radius: 1rem;
  background-color: white;
`;

export const Header = styled.header<{ typePokemon: string }>`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${(props) => handleBackgroundType(props.typePokemon)};

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  padding: 1rem 2rem;

  img {
    position: relative;
    height: 8rem;
    bottom: -1.2rem;
  }
`;

export const WrapperInfos = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1,
  h4 {
    color: white;
  }
`;

export const WrapperTypes = styled.div`
  display: flex;
  gap: 0.5rem;

  align-self: flex-start;

  div {
    background-color: rgb(255, 255, 255, 0.2);
    border-radius: 2rem;
    padding: 2px 10px;
    font-size: 12px;
    color: white;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 60%;

  padding: 3rem 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavigationInfos = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavInfos = styled.button<{
  typePokemon: string;
  isActive: boolean;
}>`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: center;

  border: none;
  background-color: transparent;

  border-bottom: ${(props) => (props.isActive ? "1px" : "0px")} solid
    ${(props) => handleBackgroundType(props.typePokemon)};
`;

export const WrapperInfosNavigation = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;

  padding: 2rem 0;

  strong,
  span {
    text-align: center;
  }
`;
