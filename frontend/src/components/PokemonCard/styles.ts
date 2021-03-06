import { mixins } from "./../../styles/mixins";
import styled from "styled-components";
import { handleBackgroundType } from "../../utils/handleBackgroundType";

export const Subtitulo = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 0.7rem;
  padding: 0.06rem 0.5rem;
  color: ${mixins.colors.white};
  border-radius: 0.2rem;
  background-color: ${({ color }) => handleBackgroundType(color!)};
`;
export const Paragraph = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 0.7rem;
`;

export const Wrapper = styled.button`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 18rem; */
  /* width: 13.5rem; */
  background-color: white;

  h3 {
    color: black;
  }

  border: none;

  font-size: 1rem;
  img {
    height: 5.5rem;
  }
`;

export const Card = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18rem;
  width: 13.5rem;
  background-color: white;

  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
  margin: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  img {
    height: 5.5rem;
  }

  transition: 0.3s;

  &:hover {
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.8);
  }
`;

export const Button = styled.button`
  color: white;
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};
  background: gray;

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

export const ButtonDetalhes = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
`;
