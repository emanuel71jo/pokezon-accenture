import { mixins } from './../../styles/mixins';
import styled from 'styled-components'


export const ContainerProfile = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 70%;
        h2 {
            margin-bottom: 1rem;
            color: ${mixins.colors.gray};
        }
`

export const Container = styled.div `
    height: 77vh;
    display: flex;
    flex-direction: column;
   
`

export const Dados = styled.div `
    width: 40rem;
    border-radius: 0.3rem;
    border: 0.10rem solid #D8D8D8;
`

export const Pedido = styled.div `
    border-bottom: 0.10rem solid #D8D8D8;
    background: #F5F5F5;
    padding: 1rem 2rem;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
        .ID {
        margin-right: 0;
        display: flex;
        flex-direction: column;
        }
        section {
            display: flex;
            flex-direction: row;
        }
            section div {
                margin-right: 3rem;
                display: flex;
                flex-direction: column;
            }
        h3 {
            font-family: ${mixins.fonts.normal};
            color: ${mixins.colors.gray};
            font-size: 0.8rem;
        }
        span {
            font-size: 1rem ;
        }
`

export const DadosPedido = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    section {
            display: flex;
            flex-direction: row;
        }
    .nome {
        margin-bottom: 0.5rem;
        color: orange;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .data {
        margin-bottom: 0.5rem;
        font-family: monospace;
    }
        section div {
                padding-left: 1rem;
                margin-right: 3rem;
                display: flex;
                flex-direction: column;
            }
`

export const Button = styled.button `
   color: white;
   height: 2rem;
   padding: 0.5rem;

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
    } 
`