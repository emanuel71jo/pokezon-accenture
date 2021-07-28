import CarouselBanner from '../../components/CarouselBanner'
import PromocaoCarousel from '../../components/PromocaoCarousel'
import LendariosCarousel from '../../components/LendariosCarousel'
import { Card, Container, ContainerCard, Search, Tipos } from './styles'
import MaisVendidos from '../../components/MaisVendidos'

export function Home() {
  return (
    <Container>
      <CarouselBanner />
      <PromocaoCarousel />
      <MaisVendidos />
      <LendariosCarousel />
     
      <Search>
            <div>
              <input type="text" placeholder="Pesquisar" />
            </div>

          <div> 
            {/* <Tipos props='fire' >Fire</Tipos>
            <p props="dragon" >Dragon</p>
            <Tipos>Electric</Tipos>
            <Tipos>Bug</Tipos>
            <Tipos>Fairy</Tipos> */}
            <p>Ice</p>
            <p>Poison</p>
            <p>Rock</p>
            <p>Grass</p>
            <p>Normal</p>
            <p>Ghost</p>
            <p>Water</p>
            <p>Steel</p>
            <p>Fighthing</p>
            <p>Flying</p>
            <p>Ground</p>
            <p>Psychic</p>
          </div>

        
        </Search>


      <ContainerCard>
        

        <Card>
          <img src="" alt="" />
          <h2> Pikachu </h2>
          <p> TIPO | HABILIDADE </p>
          <h3>R$ 18000,00</h3>
          <p>Em até 12x sem juros</p>

          <button> Adicionar ao carrinho </button>

          <p>+ detalhes</p>
        </Card>
      </ContainerCard>

    </Container>
  )
}
