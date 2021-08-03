import axios from "axios";
import { useEffect, useState } from "react";
import { getPricePokemon } from "../../utils/getPricePokemon";
import { Modal } from "../Modal";
import { Card, Subtitulo, ButtonDetalhes, Button } from "./styles";

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

  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  if (!pokemonData) return null;

  return (
    <Card>
      <img src={imagePokemon} alt="Pokemon" />
      <h2> {pokemonData.name} </h2>
      <Subtitulo>
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
      <Subtitulo>Em até 12x sem juros</Subtitulo>
      <Button> Adicionar ao carrinho </Button>
      <ButtonDetalhes onClick={toggleModal}>+ detalhes</ButtonDetalhes>
      <Modal
        title={"My modal"}
        isOpen={isModalOpen}
        onClose={toggleModal}
      ></Modal>
    </Card>
  );
};

export default PokemonCard;
