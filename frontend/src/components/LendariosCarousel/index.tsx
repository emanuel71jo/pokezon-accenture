import { Item, Titulo, Subtitulo } from "./styles";
import Carousel from "react-elastic-carousel";
import PokesLegends from "../../services/DatasCarousel/PokesLegends";
import "../PromocaoCarousel/promo.css";
import { useShopping } from "../../hooks/useShopping";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const LendariosCarousel = () => {
  const { addItemToShopping } = useShopping();

  return (
    <div id="lendarios">
      <Titulo>Pokémons Lendários</Titulo>

      <Carousel isRTL={false} breakPoints={breakPoints}>
        {PokesLegends.map((Pokemon) => (
          <Item key={Pokemon.id}>
            <img src={Pokemon.image} alt="Pokemon Promoção" />
            <h2> {Pokemon.name} </h2>
            <Subtitulo>
              {" "}
              {Pokemon.types} | {Pokemon.abilities}{" "}
            </Subtitulo>

            <h3>R$ 18000,00</h3>
            <Subtitulo>Em até 12x sem juros</Subtitulo>
            <button onClick={() => addItemToShopping(Pokemon)}>
              {" "}
              Adicionar ao carrinho{" "}
            </button>
            <p className="linkdetalhe">+ detalhes</p>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default LendariosCarousel;
