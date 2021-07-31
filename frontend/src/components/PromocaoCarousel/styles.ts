import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const BannerPreco = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem;
  font-size: 0.6rem;
  text-align: center;
  color: white;
  width: 74%;
  background-color: ${mixins.colorspokemons.water};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 21rem;
  width: 85%;
  background-color: #fff;
  img {
    height: 5.5rem;
  }

  transition: 0.3s;

  &:hover {
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.6);
    width: 90%;
  }

  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  color: white;
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};
  background: linear-gradient(
    288deg,
    rgba(74, 171, 224, 1) 10%,
    rgba(74, 171, 224, 1) 54%,
    rgba(0, 126, 169, 1) 98%
  );

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
