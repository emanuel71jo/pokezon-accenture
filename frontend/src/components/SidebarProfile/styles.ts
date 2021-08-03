import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ContainerImg = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        span {
            color: ${mixins.colors.gray};
            margin-top: 0.4rem;
            margin-bottom: 1.5rem;
            font-size: 1rem;
        }

   @media screen and (max-width: 425px) {
   width: 100%;
   display: flex;
   flex-direction: row;
    span {
        font-size: 0.9rem;
    }
  }
`

export const Imagem = styled.img `
  height: 8rem;  
  border-radius: 50%;
  
  @media screen and (max-width: 425px) {
   height: 4rem;
   margin-right: 1rem;
  }
`

export const Sidebar = styled.div `
    margin-right: 4rem;
    width: 15rem;
    ul li a {
        color: ${mixins.colors.gray};
        padding: 0.5rem;
    } 

    ul li a.active {
        font-weight: bolder;
        color: ${mixins.colors.darkgray};
        border-left: 4px solid orange;
    } 

    ul { 
        margin-top: 1rem;
    }

    ul li {
       padding: 0.8rem;
    } 
    
    @media screen and (max-width: 425px) {
        width: 100%;
        ul {
            margin-top: 0.5rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        ul li {
           padding: 0.4rem;
        } 
        ul li a.active {
            font-weight: bolder;
            color: ${mixins.colors.darkgray};
            border-left: none;
    } 
  }
`
