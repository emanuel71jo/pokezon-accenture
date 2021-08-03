import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
        img {
        margin-top: 7rem;
        margin-bottom: 8rem;
        height: 15rem;
        }   

        
  @media screen and (max-width: 425px) {
  display: flex;
  flex-direction: row;
  margin-top:5rem;
  margin-bottom: 5.4rem;
  img {
        margin-top: 7rem;
        height: 7rem;
        }  
}
   

`

export const Frase = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    h1 {
        font-size: 3rem;
        margin-top: 0.5rem;
    }
    span {
        font-size: 2rem;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

  @media screen and (max-width: 425px) {
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    span {
        font-size: 1rem;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

  }
`