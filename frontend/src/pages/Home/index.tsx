import CarouselBanner from "../../components/CarouselBanner";
import PromocaoCarousel from "../../components/PromocaoCarousel";
import { Card, Container, ContainerCard, Button } from "./styles";

export function Home() {
  return(
  <Container>
    <CarouselBanner/>
    
    <PromocaoCarousel/>
    <ContainerCard>
      <div>
      <input type="text" />
      <select name="" id=""></select>
      </div>
   
      <Card>
          <img src="" alt=""/>
          <h2> Pikachu </h2>
          <p> TIPO | HABILIDADE </p>
          <h3>R$ 18000,00</h3>
          <p>Em até 12x sem juros</p>
          
          <Button> Adicionar ao carrinho </Button>

          <p>+ detalhes</p>
    </Card>
   
    </ContainerCard>

  

  </Container>
)}
