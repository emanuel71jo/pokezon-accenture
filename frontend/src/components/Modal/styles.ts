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
    width: 80%;
    margin: 0 10%;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    cursor: auto;
`;
export const ModalTitle = styled.div`
    color: #9E25FC;
    font-size: 30px;
`;
export const ModalContent = styled.div`
     margin-top: 30px;
  color: #6B6B6B;
  font-size: 16px;
`;
export const ModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
`;