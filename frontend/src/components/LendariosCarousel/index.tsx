import {
  Item,
  Titulo,
  Wrapper,
  Subtitulo,
  ButtonDetalhes,
  Button,
} from "./styles";
import Carousel from "react-elastic-carousel";
import { PokesLegends } from "../../services/DatasCarousel/PokesLegends";
import "../PromocaoCarousel/resetCarousel.css";
import { useShopping } from "../../hooks/useShopping";
import { getPricePokemon } from "../../utils/getPricePokemon";
import { useState } from "react";
import { Modal } from "../Modal";

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

const LendariosCarousel = () => {
  const { addItemToShopping } = useShopping();

  const [pokemonSelected, setPokemonSelected] = useState<
    IPokemon | undefined
  >();

  const openModal = (pokemon: IPokemon) => setPokemonSelected(pokemon);
  const closeModal = () => setPokemonSelected(undefined);

  return (
    <div id="lendarios">
      <Titulo>Pokémons Lendários</Titulo>

      <Carousel isRTL={false} breakPoints={breakPoints}>
        {PokesLegends.map((Pokemon) => (
          <Item key={Pokemon.id}>
            <Wrapper onClick={() => openModal(Pokemon)}>
              <img src={Pokemon.image} alt="Pokemon Promoção" />
              <h2> {Pokemon.name} </h2>
              <Subtitulo>
                {Pokemon.types[0].type.name} |{" "}
                {Pokemon.abilities[0].ability.name}
              </Subtitulo>

              <h3>
                {getPricePokemon(
                  Pokemon.abilities.length || 0,
                  Pokemon.stats,
                  Pokemon.types
                )}
              </h3>
              <Subtitulo>Em até 12x sem juros</Subtitulo>
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

export default LendariosCarousel;
