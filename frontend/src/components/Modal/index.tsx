import { useState, useRef } from "react";
import {
  Footer,
  Header,
  ModalBack,
  ModalBox,
  NavigationInfos,
  WrapperInfos,
  WrapperInfosNavigation,
  WrapperTypes,
  NavInfos,
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
interface ModalProps {
  onClose: () => void;
  pokemon: IPokemon;
  pokemonUrl: string;
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  pokemon,
  pokemonUrl,
}) => {
  const outsideRef = useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const [isAbout, setIsAbout] = useState<boolean>(true);

  return (
    <ModalBack ref={outsideRef} onClick={handleCloseOnOverlay}>
      <ModalBox>
        <Header typePokemon={pokemon.types[0].type.name}>
          <WrapperInfos>
            <h1>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
            <h4>#{String(pokemon.id).padStart(3, "0")}</h4>
          </WrapperInfos>
          <WrapperTypes>
            {pokemon.types.map((value, index) => (
              <div key={index}>{value.type.name}</div>
            ))}
          </WrapperTypes>

          <img src={pokemonUrl} alt={pokemon.name} />
        </Header>
        <Footer>
          <NavigationInfos>
            <NavInfos
              onClick={() => setIsAbout(true)}
              typePokemon={pokemon.types[0].type.name}
              isActive={!!isAbout}
            >
              Sobre
            </NavInfos>
            <NavInfos
              onClick={() => setIsAbout(false)}
              typePokemon={pokemon.types[0].type.name}
              isActive={!isAbout}
            >
              Especificações
            </NavInfos>
          </NavigationInfos>

          {!!isAbout ? (
            <WrapperInfosNavigation>
              <strong>Espécie</strong>
              <span>{pokemon.species.name}</span>
              <strong>Altura</strong>
              <span>{pokemon.height} cm</span>
              <strong>Peso</strong>
              <span>{pokemon.weight} g</span>
              <strong>Habilidades</strong>
              <span>{pokemon.abilities[0].ability.name}</span>
            </WrapperInfosNavigation>
          ) : (
            <WrapperInfosNavigation>
              {pokemon.stats.map((stat) => (
                <>
                  <strong>
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)}
                  </strong>
                  <span>{stat.base_stat} XP</span>
                </>
              ))}
            </WrapperInfosNavigation>
          )}
        </Footer>
      </ModalBox>
    </ModalBack>
  );
};
