import styled from "styled-components";
import { Link } from "react-router-dom";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Form = styled.form`
  width: 22rem;
  height: 25rem;
  background-color: ${mixins.colors.secondary};
  border-radius: 5px;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  color: ${mixins.colors.buttoncolor};
  font-size: ${mixins.typography.title};
  font-family: ${mixins.fonts.semi_bold};
`;

export const Input = styled.input`
  border: none;

  border-bottom: 1px solid ${mixins.colors.gray};
  width: 100%;
  padding: 0.5rem 0;
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${mixins.colors.primary};
  }
`;

export const Button = styled.button`
  color: ${mixins.colors.secondary};
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};
  background-color: ${mixins.colors.buttoncolor};

  width: 100%;
  height: 3rem;
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
`;

export const SignUp = styled(Link)`
  text-decoration: none;
  color: ${mixins.colors.darkblue};
  font-size: ${mixins.typography.paragraph};
  font-family: ${mixins.fonts.normal};
  align-self: flex-end;

  &:hover {
    color:  ${mixins.colors.blue};
    opacity: 0.8;
  }

`;



export const Error = styled.p`
  font-size: 0.7rem;
  font-weight: 200;
  align-self: flex-end;
  color: ${mixins.colors.red};
`;
