import { backgrounds } from 'polished'
import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

// const handleBackgroundType=props=>{
//   switch (props) {
//     case"fire": return 'blue';
//     case"dragon": return 'green';
//     default: return 'yellow';
//   }
// }

export const Tipos = styled.p`
      margin-left: 1rem;
      background-color: red;
      border-radius: 0.3rem;
      padding: 0.3rem;
      color: white;
`

export const Search = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
  margin-left: 5.5rem;
  margin-right: 5.5rem;
  
  div {
   display: flex;
   flex-direction: initial;
   
 }
  
`;


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
width: 18%;
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

button {
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
}
`
