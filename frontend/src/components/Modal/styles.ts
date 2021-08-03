import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 10vh 80vh 10vh;
  height: 25rem;
  width: 30rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  cursor: auto;
`;
export const ModalTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  text-align: center;
  justify-content: center;
  font-family: Pokemon Solid;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 1rem;
`;
export const ModalContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
  text-align: center;
  line-height: 1.5;
`;
export const ButtonAdicionarCarrinho = styled.button`
  position: absolute;
  color: white;
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};
  background: gray;
  right: 35px;
  bottom: 35px;
  width: 35%;
  height: 2rem;
  border: none;
  border-radius: 8px;
  transition: 0.2s;


  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${mixins.colors.buttoncolor};
  }
`;
export const Foto = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  text-align: center;
  height: 100%;
  width: auto !important;
`;
export const ButtonClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
