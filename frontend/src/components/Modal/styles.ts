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
    text-align: right;
    top: 8.19%;
    bottom: 77.35%;
    font-family: Pokemon Solid;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 125.2%;
`;
export const ModalContent = styled.div`
    text-align: top;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
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
    background-color: #fd4602;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000040;
    height: 44px;
    margin-left: 13px;
    width: 178px;
    position: absolute;
    left: 70.41%;
    right: 3.64%;
    top: 83.13%;
    bottom: 6.27%;
    
    `;
export const Foto = styled.div`
    vertical-align: top;
    height: 100%!important;
    width: auto!important;

`;
export const ButtonClose = styled.div`

`
