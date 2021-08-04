import { Item, BannerPreco, Wrapper, ButtonDetalhes, Button } from "./styles";
import Carousel from "react-elastic-carousel";
import { PokesPromotion } from "../../services/DatasCarousel/PokesPromotion";
import "./resetCarousel.css";
import { useShopping } from "../../hooks/useShopping";
import { getPricePokemon } from "../../utils/getPricePokemon";
import { Modal } from "../Modal";
import { useState } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 650, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type TypePokemon = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
interface IPokemon {
  abilities: Array<Ability>;
  base_experience: number; //
  height: number; //
  id: number;
  name: string;
  order: number; //
  stats: Array<Stat>;
  types: Array<TypePokemon>;
  weight: number; //
  species: {
    //
    name: string;
    url: string;
  };
  image: string;
}

const PromocaoCarousel = () => {
  const { addItemToShopping } = useShopping();

  const [pokemonSelected, setPokemonSelected] = useState<
    IPokemon | undefined
  >();

  const openModal = (pokemon: IPokemon) => setPokemonSelected(pokemon);
  const closeModal = () => setPokemonSelected(undefined);

  return (
    <div id="promocao">
      <h2 className="titulo">Promoções Especiais</h2>
      <Carousel itemPadding={[0, 0]} isRTL={false} breakPoints={breakPoints}>
        {PokesPromotion.map((Pokemon) => (
          <Item key={Pokemon.id}>
            <Wrapper onClick={() => openModal(Pokemon)}>
              <img src={Pokemon.image} alt="Pokemon Promoção" />
              <h2>{Pokemon.name}</h2>
              <p className="subtitulo">
                {Pokemon.types[0].type.name} |{" "}
                {Pokemon.abilities[0].ability.name}
              </p>
              <BannerPreco>Preço imperdível!</BannerPreco>

              <h3>
                {getPricePokemon(
                  Pokemon.abilities.length || 0,
                  Pokemon.stats,
                  Pokemon.types
                )}
              </h3>
              <p className="subtitulo">Em até 12x sem juros</p>
            </Wrapper>
            <Button onClick={() => addItemToShopping(Pokemon)}>
              Adicionar ao carrinho
            </Button>
            <ButtonDetalhes onClick={() => openModal(Pokemon)}>
              + detalhes
            </ButtonDetalhes>
          </Item>
        ))}
      </Carousel>
      {pokemonSelected && (
        <Modal
          onClose={closeModal}
          pokemon={pokemonSelected}
          pokemonUrl={pokemonSelected.image}
        />
      )}
    </div>
  );
};

export default PromocaoCarousel;
