import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div``;

export const ContainerCard = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  justify-content: center
`;

export const Card = styled.div `
width: 14rem;
height: 20rem;
display: flex;
flex-direction: column;
justify-content: center;
align-itens: center;
background: #FFFFFF;
border: 3px solid #EBF227;
box-sizing: border-box;
border-radius: 15px;

`;


export const Button = styled.button`
  color: black;
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};
  background-color: #EBF227;

  width: 70%;
  height: 2rem;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${mixins.colors.buttoncolor};
    cursor: not-allowed;
  }
`;

