import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerProfile = styled.div`
  height: 100%;

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

export const ContainerDados = styled.div`
  input,
  select {
    margin-bottom: 1.2rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    border: 0.08rem solid #d8d8d8;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    outline: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${mixins.colors.gray};
  width: 100%;

  @media screen and (max-width: 425px) {
    width: 100%;
    input,
    select {
      padding-top: 0.2rem;
    }
  }
`;

export const Dados = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${mixins.fonts.normal};
  padding: 2rem;
  width: 24rem;
  border-radius: 0.4rem;
  border: 0.14rem solid #d8d8d8;

  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 100%;
  }
`;

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
  }

  @media screen and (max-width: 425px) {
    padding: 0.2rem 0.5rem;
  }
`;
