import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Subtitulo = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 1rem;
`

export const Titulo = styled.h2`
  border-bottom: 0.2rem solid black;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;

  margin-top: 6rem;
  margin-bottom: 1rem;
  margin-left: 5.5rem;
`

export const Item = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 21rem;
  width: 80%;
  border: none;

  color: black;
  box-shadow: 5px 5px 10px 1px rgb(0 0 0 / 30%);
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
  font-size: 1rem;
  h3 {
    color: #fb6635;
  }
  img {
    height: 5.5rem;
  }

  transition: 0.3s;

  &:hover {
    box-shadow: 5px 5px 10px 1px rgb(0 0 0 / 100%);
    height: 22rem;
    width: 85%;
  }

  button {
    margin-top: 1.2rem;
    color: white;
    font-size: ${mixins.typography.paragraph};
    font-family: ${mixins.fonts.normal};
    background-color: #fb6635;

    width: 70%;
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
