import { mixins } from "../styles/mixins";

export const handleBackgroundType = (color: string) => {
  switch (color) {
    case "fire":
      return `${mixins.colorspokemons.fire}`;
    case "dragon":
      return `${mixins.colorspokemons.dragon}`;
    case "bug":
      return `${mixins.colorspokemons.bug}`;
    case "electric":
      return `${mixins.colorspokemons.electric}`;
    case "fairy":
      return `${mixins.colorspokemons.fairy}`;
    case "ice":
      return `${mixins.colorspokemons.ice}`;
    case "poison":
      return `${mixins.colorspokemons.poison}`;
    case "rock":
      return `${mixins.colorspokemons.rock}`;
    case "grass":
      return `${mixins.colorspokemons.grass}`;
    case "normal":
      return `${mixins.colorspokemons.normal}`;
    case "ghost":
      return `${mixins.colorspokemons.ghost}`;
    case "water":
      return `${mixins.colorspokemons.water}`;
    case "steel":
      return `${mixins.colorspokemons.stell}`;
    case "fighting":
      return `${mixins.colorspokemons.fighthing}`;
    case "flying":
      return `${mixins.colorspokemons.flying}`;
    case "ground":
      return `${mixins.colorspokemons.ground}`;
    case "psychic":
      return `${mixins.colorspokemons.psychic}`;
    default:
      return `${mixins.colors.gray}`;
  }
};
