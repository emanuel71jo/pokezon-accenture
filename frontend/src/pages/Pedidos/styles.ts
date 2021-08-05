import { mixins } from "../../styles/mixins";
import styled from "styled-components";

export const ContainerProfile = styled.div`
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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dados = styled.div`
  width: 40rem;
  border-radius: 0.3rem;
  border: 0.1rem solid #d8d8d8;
  @media screen and (max-width: 425px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const Pedido = styled.div`
  border-bottom: 0.1rem solid #d8d8d8;
  background: #f5f5f5;
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  div {
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
    font-size: 1rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0.3rem 1rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    div {
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
      font-size: 0.8rem;
    }
  }
`;

export const DadosPedido = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  img {
    height: 5rem;
    width: 5rem;
  }

  .nome {
    margin-bottom: 0.5rem;
    color: orange;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  .data {
    margin-bottom: 0.5rem;
    font-family: monospace;
  }
  div {
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
    img {
      height: 5rem;
    }
    div {
      padding-left: 6rem;
    }
    .nome {
      margin-bottom: 0.3rem;
    }
    .data {
      margin-bottom: 0.3rem;
    }
  }
`;

export const Button = styled.button`
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
`;
