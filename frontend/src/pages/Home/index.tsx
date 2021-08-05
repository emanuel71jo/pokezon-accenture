import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Promo from "../../components/BannerSolo";
import CarouselBanner from "../../components/CarouselBanner";
import LendariosCarousel from "../../components/LendariosCarousel";
import MaisVendidos from "../../components/MaisVendidos";
import PokemonCard from "../../components/PokemonCard";
import PromocaoCarousel from "../../components/PromocaoCarousel";
import api from "../../services/datasPokemons/api";
import ReactLoading from "react-loading";
import {
  ButtonsTypes,
  Container,
  ContainerCard,
  Input,
  Search,
  Top,
  TypeButton,
  Wrapper,
} from "./styles";

interface IPokemon {
  name: string;
  url: string;
  types: {
    types: Array<{
      type: {
        name: string;
      };
    }>;
  };
}

export function Home() {
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([]);

  const [pagePokemon, setPagePokemons] = useState<Array<IPokemon>>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Array<IPokemon>>([]);
  const [loading, setLoading] = useState(false);
  const [typeSelected, setTypeSelected] = useState("Todos");

  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState<string>("");
  const limit = 20;

  useEffect(() => {
    setLoading(true);
    api
      .get<{ results: Array<IPokemon> }>(`/pokemon?limit=898&offset=0`)
      .then(async (response) => {
        const pokemons = response.data.results.map(async (pokemon) => {
          const types = await getTypesPokemon(pokemon.url);

          return {
            ...pokemon,
            types,
          };
        });

        await Promise.all(pokemons).then((response) => {
          setPokemons(response);
          setFilteredPokemons(response);
          setLoading(false);
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    setPagePokemons(
      filteredPokemons.slice(limit * offset, limit * (offset + 1))
    );
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPokemons, offset, pokemons]);

  useEffect(() => {
    setLoading(true);
    let pokemonsToShow: IPokemon[];

    if (pokemons.length === 0) return;

    if (query === "") {
      pokemonsToShow = pokemons.filter(
        (pokemon) =>
          typeSelected === "Todos" ||
          pokemon.types.types.find(
            (type) =>
              type.type.name.toUpperCase() === typeSelected.toUpperCase()
          )
      );
    } else {
      pokemonsToShow = pokemons.filter(
        (pokemon) =>
          pokemon.name.toUpperCase().includes(query.toUpperCase()) &&
          (typeSelected === "Todos" ||
            pokemon.types.types.find(
              (type) =>
                type.type.name.toUpperCase() === typeSelected.toUpperCase()
            ))
      );
    }

    setLoading(false);
    setFilteredPokemons(pokemonsToShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, typeSelected]);

  const getTypesPokemon = async (url: string) => {
    const response = await api.get<{
      types: Array<{
        type: {
          name: string;
        };
      }>;
    }>(url);

    return response.data;
  };

  const onPaginationClick = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setOffset(value - 1);
  };

  const onChange = (q: any) => {
    setQuery(q);
  };

  const typesButtons = [
    "Todos",
    "Fire",
    "Dragon",
    "Bug",
    "Electric",
    "Fairy",
    "Ice",
    "Poison",
    "Rock",
    "Grass",
    "Normal",
    "Ghost",
    "Water",
    "Steel",
    "Fighting",
    "Flying",
    "Ground",
    "Psychic",
  ];

  return (
    <Container>
      <CarouselBanner />
      <PromocaoCarousel />
      <MaisVendidos />
      <LendariosCarousel />
      <Promo />

      <Search>
        <Input>
          <input
            type="text"
            placeholder="Pesquisar"
            value={query || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        </Input>
        <ButtonsTypes>
          {typesButtons.map((type) => (
            <TypeButton
              color={type}
              disabled={typeSelected === type}
              onClick={() => setTypeSelected(type)}
            >
              {type}
            </TypeButton>
          ))}
        </ButtonsTypes>
      </Search>
      <ContainerCard>
        <Wrapper>
          {loading ? (
            <ReactLoading type={"spinningBubbles"} color={"#000"} />
          ) : pagePokemon.length === 0 ? (
            <h1>Nenhum pokémon encontrado</h1>
          ) : (
            pagePokemon.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))
          )}
        </Wrapper>
        <AnchorLink href="#containerCard">
          <Pagination
            count={Math.ceil(filteredPokemons.length / limit)}
            page={offset + 1}
            onChange={onPaginationClick}
          />
        </AnchorLink>
      </ContainerCard>
      <Top>
        <button>
          <AnchorLink href="#logo">↑</AnchorLink>
        </button>
      </Top>
    </Container>
  );
}
