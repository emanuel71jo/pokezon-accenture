import { Container, Frase } from './styles'
import img from '../../assets/zzz.gif'

export function NotFound() {
  return <Container>
      
      <div>
        <img src= { img } alt="Imagem Pokémon" />
      </div>
      
      <Frase>
      <span>Oooops...</span>      
        <h1>ERROR 404</h1>
        <span>Page not found :( </span>
      </Frase>
    
    </Container>
}
