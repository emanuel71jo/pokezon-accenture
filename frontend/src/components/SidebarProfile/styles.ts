import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ContainerImg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
        span {
            color: ${mixins.colors.gray};
            margin-left: 0.8rem;
            font-size: 1rem;
        }
`

export const Imagem = styled.img `
  height: 8rem;  
  border-radius: 50%;
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
    
 
`
