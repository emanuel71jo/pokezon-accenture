import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const FooterComponent = styled.footer`
  padding: 1.5rem;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  background-color: ${mixins.colors.darkgray};
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${mixins.typography.paragraph};
    color: ${mixins.colors.white};
  }
`;
