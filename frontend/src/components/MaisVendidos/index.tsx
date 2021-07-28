import { Item, Titulo, Subtitulo, Button, ButtonDetalhes} from "./styles";
import Carousel from "react-elastic-carousel";
import PokesMaisVendidos from "../../services/DatasCarousel/PokesMaisVendidos";
import "../PromocaoCarousel/resetCarousel.css";
import { useShopping } from "../../hooks/useShopping";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MaisVendidos = () => {
  const { addItemToShopping } = useShopping();

  return (
    <div id="maisVendidos">
      <Titulo>Mais vendidos</Titulo>
      <Carousel isRTL={false} breakPoints={breakPoints}>
        {PokesMaisVendidos.map((Pokemon) => (
          <Item key={Pokemon.id}>
            <img src={Pokemon.image} alt="Pokemon Promoção" />
            <h2> {Pokemon.name} </h2>
            <Subtitulo>
              {" "}
              {Pokemon.types} | {Pokemon.abilities}{" "}
            </Subtitulo>

            <h3>R$ 18000,00</h3>
            <Subtitulo>Em até 12x sem juros</Subtitulo>
            <Button onClick={() => addItemToShopping(Pokemon)}>
              {" "}
              Adicionar ao carrinho{" "}
            </Button>
            <ButtonDetalhes >+ detalhes</ButtonDetalhes>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MaisVendidos;
