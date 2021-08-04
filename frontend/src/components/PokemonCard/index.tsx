import axios from "axios";
import { useEffect, useState } from "react";
import { useShopping } from "../../hooks/useShopping";
import { getPricePokemon } from "../../utils/getPricePokemon";
import { Modal } from "../Modal";
import {
  Card,
  Subtitulo,
  ButtonDetalhes,
  Button,
  Paragraph,
  Wrapper,
} from "./styles";

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
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  stats: Array<Stat>;
  types: Array<TypePokemon>;
  weight: number;
  species: {
    name: string;
    url: string;
  };
}

interface Props {
  pokemon: {
    url: string;
  };
}

const PokemonCard = ({ pokemon }: Props) => {
  const [imagePokemon, setImagePokemon] = useState("");
  const [pokemonData, setPokemonData] = useState<IPokemon>();

  useEffect(() => {
    axios.get<IPokemon>(pokemon.url).then((response) => {
      setPokemonData(response.data);
      setImagePokemon(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
          response.data.id
        ).padStart(3, "0")}.png`
      );
    });
  }, [pokemon.url]);

  const [isModalOpen, setModalState] = useState<boolean>(false);
  const { addItemToShopping } = useShopping();

  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  if (!pokemonData) return null;

  return (
    <>
      <Card>
        <Wrapper onClick={openModal}>
          <img src={imagePokemon} alt="Pokemon" />
          <h2> {pokemonData.name} </h2>
          <Subtitulo color={pokemonData?.types[0].type.name}>
            {pokemonData?.types[0].type.name} |{" "}
            {pokemonData?.abilities[0].ability.name}
          </Subtitulo>

          <h3>
            {getPricePokemon(
              pokemonData.abilities.length || 0,
              pokemonData.stats,
              pokemonData.types
            )}
          </h3>
          <Paragraph>Em até 12x sem juros</Paragraph>
        </Wrapper>
        <Button
          onClick={() =>
            addItemToShopping({ ...pokemonData, image: imagePokemon })
          }
        >
          Adicionar ao carrinho
        </Button>
        <ButtonDetalhes onClick={openModal}>+ detalhes</ButtonDetalhes>
      </Card>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          pokemon={pokemonData}
          pokemonUrl={imagePokemon}
        />
      )}
    </>
  );
};

export default PokemonCard;
