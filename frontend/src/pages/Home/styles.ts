import styled from 'styled-components'
import { mixins } from '../../styles/mixins'


const handleBackgroundType = (color: string) => {
  switch (color) {
    case "Fire": return `${mixins.colorspokemons.fire}`;
    case "Dragon": return `${mixins.colorspokemons.dragon}`;
    case "Bug": return `${mixins.colorspokemons.bug}`;
  	case "Eletric": return `${mixins.colorspokemons.electric}`;
    case "Fairy": return `${mixins.colorspokemons.fairy}`;
    case "Ice": return `${mixins.colorspokemons.ice}`;
    case "Poison": return `${mixins.colorspokemons.poison}`;
    case "Rock": return `${mixins.colorspokemons.rock}`;
    case "Grass": return `${mixins.colorspokemons.grass}`; 
    case "Normal": return `${mixins.colorspokemons.normal}`;
    case "Ghost": return `${mixins.colorspokemons.ghost}`;
    case "Water": return `${mixins.colorspokemons.water}`;
    case "Steel": return `${mixins.colorspokemons.stell}`;
    case "Fighthing": return `${mixins.colorspokemons.fighthing}`;
    case "Flying": return `${mixins.colorspokemons.flying}`;
    case "Ground": return `${mixins.colorspokemons.ground}`;
    case "Psychic": return `${mixins.colorspokemons.psychic}`;
    default: return `${mixins.colors.gray}`;
  }
}


export const TypeButton = styled.button`
      margin-left: 1rem;
      background-color: ${({color}) => handleBackgroundType(color!)};
      border-radius: 0.3rem;
      padding: 0.3rem;
      color: white;
      border: none;
      margin-bottom: 0.4rem;

    &:hover:not(:disabled) {
        opacity: 0.8;
      }
`

export const Search = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
  margin-left: 5.5rem;
  margin-right: 5.5rem;

  @media screen and (max-width: 425px){
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    padding: 0.4rem;
    width: 15rem;
    outline: none;
    border: solid 0.2rem ${mixins.colors.gray};
    border-radius: 0.2rem;
  }
`

export const ButtonsTypes = styled.div`
  display: inline-block;
  width: 50%;
  @media screen and (max-width: 425px){
    width: 100%;
    margin: 2rem 0 0;
  }
`

export const Container = styled.div``

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  justify-content: center;
`

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 21rem;
width: 15rem;
background-color: #fff;
img {
  height: 5.5rem;
}

transition: 0.3s;

&:hover {
  box-shadow: 5px 5px 10px 1px rgb(0 0 0 / 100%);
  height: 22rem;
  width: 19%;
}

box-shadow: 5px 5px 10px 1px rgb(0 0 0 / 30%);
padding-top: 1rem;
padding-bottom: 1rem;
margin-bottom: 1rem;
margin-top: 1rem;
border-radius: 1rem;
font-size: 1rem;


`

export const Button = styled.button`

margin-top: 1rem;
color: white;
font-size: ${mixins.typography.paragraph};
font-family: ${mixins.fonts.normal};
background: gray;

width: 80%;
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
`

export const ButtonDetalhes = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
`