import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderComponent = styled.header`
  background-color: ${mixins.colors.darkgray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.9rem 2rem;

  img {
    width: 8rem;
  }
`

export const Container = styled.div`
  color: ${mixins.colors.white};
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

  @media screen and (max-width: 700px){
    display: none;
  }
`
