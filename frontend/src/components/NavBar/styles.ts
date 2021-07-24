import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Nav = styled.div `
    padding: 1rem;
    display: flex;
    background-color: ${mixins.colors.gray};
    display: block;
`

export const Ul = styled.ul `
    display: flex;
    justify-content: space-evenly;
`

export const Link = styled(AnchorLink)` 
    color: ${mixins.colors.white};

    &:hover {
    color:  ${mixins.colors.yellow};
    opacity: 0.9;
      }
`