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

    
  @media screen and (max-width: 425px) {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 80%;
  
  h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${mixins.colors.gray};
  font-size: 1rem;
  display: flex;
  align-items: center;
 justify-content: center;
  }

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

    
  @media screen and (max-width: 425px) {
  margin-bottom: 2rem;
  width: 100%;
 }
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

        @media screen and (max-width: 425px) {
        padding: 0.3rem 1rem;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        .ID {
            margin-right: auto; 
            display: flex;
            flex-direction: column;
        }
        section {
            display: flex;
            flex-direction: column;
        }
        section div {
            margin-bottom: 0.5rem;
            margin-right: 3rem;
            display: flex;
            flex-direction: column;
            }
            h3 {
            font-family: ${mixins.fonts.normal};
            color: ${mixins.colors.gray};
            font-size: 0.6rem;
        }
        span {
            font-size: 0.8rem ;
        }
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

    @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 1.5rem;
    width: 100%;
        section img {
        height: 5rem;
        }
        section div {
        padding-left: 6rem;
        }
        .nome {
        margin-bottom: 0.3rem;
        }
        .data {
        margin-bottom: 0.3rem;
        }
       
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

    
  @media screen and (max-width: 425px) {
    margin-top: 1rem;
    height: 1.8rem;
    padding: 0.2rem;
    border: none;
    border-radius: 5px;
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