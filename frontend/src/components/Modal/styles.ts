import { Top } from './../../pages/Home/styles';
import styled from "styled-components";

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
    background-color: rgba(0, 0, 0, .8);
    cursor: pointer;
 `;
export const ModalBox = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10vh 80vh 10vh;
    grid-gap: 20px;
    width: 50%;
    height: 60%;
    margin: 0 10%;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    cursor: auto;
`;
export const ModalTitle = styled.div`
    grid-column-start:3;
    grid-column-end: 4;
    position: absolute;
    text-align: center;
    justify-content: center;
    top: 8.19%;
    bottom: 77.35%;
    font-family: Pokemon Solid;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 125.2%;
`;
export const ModalContent = styled.div`
    position: absolute;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end:3;
    text-align: center;
    justify-content: top;
    align-items: rigth;
    line-height: 1.8;

`;
export const ModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
`;
export const ButtonAdicionarCarrinho = styled.button`
    position: absolute;
    background-color: #fd4602;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000040;
    height: 44px;
    width: 178px;
    bottom: 7%;
    grid-column-start: 3;
    grid-column-end: 4;

    
    `;
export const Foto = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end:3;
    vertical-align: top;
    height: 100%!important;
    width: auto!important;

`;
export const ButtonClose = styled.div`
align-items: rigth;
grid-column-start: 5;




    

`
