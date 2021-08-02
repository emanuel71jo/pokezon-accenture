import { Input } from './../SignUp/styles';
import styled from 'styled-components'
import { mixins } from '../../styles/mixins'


export const ContainerProfile = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 60%;
    /* margin-left: 10rem;
    margin-right: 10rem; */
      h2 {
        margin-bottom: 1rem;
        color: ${mixins.colors.gray};

      }
`

export const Container = styled.div`
    height: 77vh;
    display: flex;
    flex-direction: column;
   
    `

export const ContainerDados = styled.div `
  Input, select {
    margin-bottom: 1.2rem;
    padding-top: 0.8rem;
    border-radius: 0.4rem;
    border: 0.08rem solid #D8D8D8;

  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  color: ${mixins.colors.gray};
  width: 100%;
`

export const Dados = styled.div `
    display: flex;
    justify-content: center;
    font-family: ${mixins.fonts.normal};
    padding: 2rem;
    width: 24rem;
    border-radius: 0.4rem;
    border: 0.14rem solid #D8D8D8;

`

export const Button = styled.button`
padding: 0.5rem 1rem;
color: white;
font-size: ${mixins.typography.paragraph};
font-family: ${mixins.fonts.normal};
background: orange;

border: none;
border-radius: 8px;
transition: 0.2s;

&:hover:not(:disabled) {
  opacity: 0.8;
}

&:disabled {
  background-color: ${mixins.colors.buttoncolor};
  cursor: not-allowed;
} `