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
}

export function Home() {
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([]);

  const [pagePokemon, setPagePokemons] = useState<Array<IPokemon>>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Array<IPokemon>>([]);
  const [loading, setLoading] = useState(false);

  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState<string>("");
  const limit = 20;

  useEffect(() => {
    setLoading(true);
    api
      .get<{ results: Array<IPokemon> }>(`/pokemon?limit=898&offset=0`)
      .then((response) => {
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
        setLoading(false);
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
    if (query === "") setFilteredPokemons(pokemons);
    else
      setFilteredPokemons(
        pokemons.filter((pokemon) =>
          pokemon.name.toUpperCase().includes(query.toUpperCase())
        )
      );
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
            <TypeButton color={type}> {type} </TypeButton>
          ))}
        </ButtonsTypes>
      </Search>
      <ContainerCard>
        <Wrapper>
          {loading ? (
            <ReactLoading type={"spinningBubbles"} color={"#000"} />
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
