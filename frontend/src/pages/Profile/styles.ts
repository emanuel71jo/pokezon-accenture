import { Input } from './../SignUp/styles';
import styled from 'styled-components'
import { mixins } from '../../styles/mixins'


export const Container = styled.div`
    height: 77vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerDados = styled.div `
    color: ${mixins.colors.gray};
   label {
        margin-top: 1rem;
        margin-right: 0.4rem;
    }
    Input {
        padding: 0.2rem 0.5rem;
        background: none;
        border: none;
        border-bottom: 1px solid ${mixins.colors.gray};
        margin-top: 1rem;
       margin-right: 1rem;
    }

    button {
        margin-left: 28rem;
        margin-top: 4rem;
    }
`

export const Dados = styled.div `

    font-family: ${mixins.fonts.normal};
    margin-left: 2rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rem;
    border: 0.04rem solid gray;

`

export const Button = styled.button`
margin-top: 1.2rem;
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