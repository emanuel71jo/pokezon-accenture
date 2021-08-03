import styled from "styled-components";
import { darken, lighten } from "polished";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`

  padding: 30px;
  display: flex;
  background: #e5e5e5;
  padding: 50px 80px 50px 80px;
  width: 100%;
  height: 100%;
  background-color:${mixins.colors.background};

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center; // deixa o testo do botão finalizar centralizado
      margin-top: 0, 5rem;
      margin-bottom: 0, 5rem;
      //margin-left: 1.8rem;

      color: #fff;
      background: linear-gradient(
        288deg,
        rgba(241, 101, 54, 1) 10%,
        rgba(251, 102, 53, 1) 54%,
        rgba(241, 101, 54, 1) 98%
      );
      font-size: ${mixins.typography.paragraph};
      font-family: ${mixins.fonts.normal};
      font-weight: bold;
      text-transform: uppercase;

      border-radius: 5px;
      padding: 25px 25px;

      border: none;
      border-radius: 8px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.06, "#fd4602")};
      }
    }
  }
  @media screen and (max-width: 425px){
  display: flex;
  padding: 25px 40px 25px 40px;
  width: 100%;
  height: 100%;
  }

`;
export const CartTable = styled.table`
  width: 100%; // tamanho do elemento (antes 1500px)
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); // sombra da tabela
  padding: 50px 50px 50px 50px; // distancia da borta

  @media screen and (max-width: 425px){
    width: 100%;
    flex-direction: row;

  }
`;

export const ProductTable = styled.table`
  width: 100%; // INDETIDATO, ESTAMOS EM OBRAS! ;)

  thead th {
    color: #656565;
    text-align: left;
    font-size: 20px;
    justify-content: left; // alinhar a cabeça da tabela a esquerda
    //background-color: lightblue; // deixar o fundo da cabeça azul
  }
  tbody td {
    border-bottom: 1px solid #eee;
    //font-size: 20px;
    justify-content: left;
    //background-color: lightblue; // deixar o fundo da tabela azul
  }
  img {
    height: 100px;
    //background-color: red; // deixar o fundo da imagem vermelho
  }
  strong {
    color: #656565;
    display: block;
    font-size: 16px;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #1a1a1a;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #1a1a1a;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    svg {
      color: #f16536;
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: ${darken(0.06, "#fd4602")};
      }
    }
    &:disabled {
      svg {
        color: ${lighten(0.25, "#f16536")};
        cursor: not-allowed;
      }
    }
  }
  h2 {
    color: #1a1a1a;
    display: block;
    font-size: 18px;
  }
  @media screen and (max-width: 425px){
    img{
      height: 50px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #656565;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1001;

  bottom: 0;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Caixa de finalização de pedido
export const Wrapper = styled.div`
  width: 30rem;
  height: 22rem;
  background-color: ${mixins.colors.secondary};
  border-radius: 5px;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);

  // imagem da Caixa de finalização de pedido
  img {
    height: 115px;
    width: 115px;
    align-self: center;
  }
  h1 { // Tamnho e local da fonte do titulo da caixa de finalização de pedido
    align-self: center;
    text-align: center;
    font-size: 25px;
    color: #0e0a0a;
    padding: 0.25em 0.25em 0.25em;
    font-weight: bold;
    color: ${mixins.colors.buttoncolor};  
  }
  h2 { //Tamnho e local da fonte do texto de corpo da caixa de finalização de pedido
    align-self: center;
    text-align: center;
    font-size: 18px;
    color: #1a1a1a;
    font-weight: normal;
    font-family: ${mixins.fonts.normal};
    color: ${mixins.colors.darkgray};
  }
`;

// Saida  da Caixa de finalização de pedido
export const ButtonExitModal = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  align-self: flex-end; //baseline
`;

export const Button = styled.button`
align-self: center;
margin-top: 1.2rem;
color: red;
font-size: ${mixins.typography.paragraph};
font-family: ${mixins.fonts.normal};
background: linear-gradient(288deg, rgba(241,101,54,1) 10%, rgba(251,102,53,1) 54%, rgba(241,101,54,1) 98%);
width: 40%;
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