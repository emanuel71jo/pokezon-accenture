import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Nav = styled.div`
  padding: 1rem;
  display: flex;
  background-color: ${mixins.colors.gray};
  display: block;

  @media screen and (max-width: 700px){
    display: none;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
`

export const Link = styled(AnchorLink)`
  color: ${mixins.colors.white};

  &:hover {
    color: ${mixins.colors.yellow};
    opacity: 0.9;
  }
`
