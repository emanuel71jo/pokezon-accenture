import { Item, BannerPreco, ButtonDetalhes, Button} from "./styles";
import Carousel from "react-elastic-carousel";
import PokesPromotion from "../../services/DatasCarousel/PokesPromotion";
import "./resetCarousel.css";
import { useShopping } from "../../hooks/useShopping";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const PromocaoCarousel = () => {
  const { addItemToShopping } = useShopping();

  return (
    <div id="promocao">
      <h2 className="titulo">Promoções Especiais</h2>
      <Carousel isRTL={false} breakPoints={breakPoints}>
        {PokesPromotion.map((Pokemon) => (
          <Item key={Pokemon.id}>
            <img src={Pokemon.image} alt="Pokemon Promoção" />
            <h2> {Pokemon.name} </h2>
            <p className="subtitulo">
              {" "}
              {Pokemon.types} | {Pokemon.abilities}{" "}
            </p>
            <BannerPreco>Preço imperdível!</BannerPreco>

            <h3>R$ 18000,00</h3>
            <p className="subtitulo">Em até 12x sem juros</p>
            <Button onClick={() => addItemToShopping(Pokemon)}>
              {" "}
              Adicionar ao carrinho{" "}
            </Button>
            <ButtonDetalhes>+ detalhes</ButtonDetalhes>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PromocaoCarousel;
