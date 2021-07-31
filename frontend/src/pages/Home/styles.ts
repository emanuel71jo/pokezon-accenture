import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const handleBackgroundType = (color: string) => {
  switch (color) {
    case "Fire":
      return `${mixins.colorspokemons.fire}`;
    case "Dragon":
      return `${mixins.colorspokemons.dragon}`;
    case "Bug":
      return `${mixins.colorspokemons.bug}`;
    case "Eletric":
      return `${mixins.colorspokemons.electric}`;
    case "Fairy":
      return `${mixins.colorspokemons.fairy}`;
    case "Ice":
      return `${mixins.colorspokemons.ice}`;
    case "Poison":
      return `${mixins.colorspokemons.poison}`;
    case "Rock":
      return `${mixins.colorspokemons.rock}`;
    case "Grass":
      return `${mixins.colorspokemons.grass}`;
    case "Normal":
      return `${mixins.colorspokemons.normal}`;
    case "Ghost":
      return `${mixins.colorspokemons.ghost}`;
    case "Water":
      return `${mixins.colorspokemons.water}`;
    case "Steel":
      return `${mixins.colorspokemons.stell}`;
    case "Fighthing":
      return `${mixins.colorspokemons.fighthing}`;
    case "Flying":
      return `${mixins.colorspokemons.flying}`;
    case "Ground":
      return `${mixins.colorspokemons.ground}`;
    case "Psychic":
      return `${mixins.colorspokemons.psychic}`;
    default:
      return `${mixins.colors.gray}`;
  }
};

export const TypeButton = styled.button`
  margin-left: 0.5rem;
  background-color: ${({ color }) => handleBackgroundType(color!)};
  border-radius: 0.5rem;
  padding: 0.3rem;
  color: white;
  border: none;
  margin-bottom: 0.4rem;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
  margin-left: 5.5rem;
  margin-right: 5.5rem;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 1.8rem;
    padding: 0.4rem;
    width: 12rem;
    outline: none;
    border: solid 0.18rem ${mixins.colors.gray};
    border-radius: 0.4rem;
  }
`;

export const ButtonsTypes = styled.div`
  display: inline-block;

  @media screen and (max-width: 425px) {
    width: 100%;
    margin: 2rem 0 0;
  }
`;

export const Container = styled.div`
  min-height: 80vh;
  width: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  justify-content: center;
`;

export const Subtitulo = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 0.7rem;
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
  h3 {
    color: black;
  }

  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
  margin: 1rem 0;
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

export const Top = styled.div`
  button {
    font-size: 1.5rem;
    padding: 0.7rem 1.4rem 0.7rem;
    border-radius: 50%;
    background: #fd4602;
    border: 0px;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  transition: margin-top 250ms;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -3.2rem;
  left: 79rem;
  width: 3.3rem;
  height: 3.3rem;
`;
