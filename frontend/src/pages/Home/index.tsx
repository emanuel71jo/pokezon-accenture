import CarouselBanner from '../../components/CarouselBanner'
import PromocaoCarousel from '../../components/PromocaoCarousel'
import LendariosCarousel from '../../components/LendariosCarousel'
import { Card, Container, ContainerCard, Search, TypeButton, ButtonsTypes, Input, ButtonDetalhes, Button } from './styles'
import MaisVendidos from '../../components/MaisVendidos'

export function Home() {
  const typesButtons = ["Fire", "Dragon", "Bug", "Eletric", "Fairy", "Ice", "Poison", "Rock", "Grass", "Normal", "Ghost", "Water", "Steel", "Fighthing", "Flying", "Ground", "Psychic"]
  return (
    <Container>
      <CarouselBanner />
      <PromocaoCarousel />
      <MaisVendidos />
      <LendariosCarousel />
     
      <Search>
            <Input>
              <input type="text" placeholder="Pesquisar" />
            </Input>
          <ButtonsTypes> 
          {typesButtons.map(type =>(
            <TypeButton color={type}> {type} </TypeButton>
          ))}
          </ButtonsTypes>
      </Search>

      <ContainerCard>
        

        <Card>
          <img src="" alt="" />
          <h2> Pikachu </h2>
          <p> TIPO | HABILIDADE </p>
          <h3>R$ 18000,00</h3>
          <p>Em até 12x sem juros</p>

          <Button> Adicionar ao carrinho </Button>

          <ButtonDetalhes>+ detalhes</ButtonDetalhes>
        </Card>
      </ContainerCard>

    </Container>
  )
}
