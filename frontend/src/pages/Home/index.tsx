import CarouselBanner from "../../components/CarouselBanner";
import PromocaoCarousel from "../../components/PromocaoCarousel";
import LendariosCarousel from "../../components/LendariosCarousel";
import {
  Top,
  Container,
  ContainerCard,
  Search,
  TypeButton,
  ButtonsTypes,
  Input,
} from "./styles";
import MaisVendidos from "../../components/MaisVendidos";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Promo from "../../components/BannerSolo";
import React, { useState, useEffect } from "react";
import api from "../../services/datasPokemons/api";
import PokemonCard from "../../components/PokemonCard";

export function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get(`/pokemon?limit=20&offset=0`).then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

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
          <input type="text" placeholder="Pesquisar" />
        </Input>
        <ButtonsTypes>
          {typesButtons.map((type) => (
            <TypeButton color={type}> {type} </TypeButton>
          ))}
        </ButtonsTypes>
      </Search>
      <ContainerCard>
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </ContainerCard>
      <Top>
        <button>
          <AnchorLink href="#logo">↑</AnchorLink>
        </button>
      </Top>
    </Container>
  );
}
