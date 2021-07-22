import styled from "styled-components";
import { mixins } from "../../styles/mixins";

interface IHeaderComponentProps {
  isAuthenticated: boolean;
}

export const HeaderComponent = styled.header<IHeaderComponentProps>`
  display: flex;
  justify-content: ${(props) =>
    props.isAuthenticated ? "space-between" : "center"};
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 0 2rem;

  img {
    width: 8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: ${mixins.typography.subTitle};
      font-family: ${mixins.fonts.semi_bold};
    }

    p {
      font-size: 0.7rem;
      font-family: ${mixins.fonts.normal};
      font-weight: 300;
    }
  }

  button {
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: transparent;
  }
`;
