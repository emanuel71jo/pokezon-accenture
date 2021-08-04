import CarouselBanner from "../../components/CarouselBanner";
import PromocaoCarousel from "../../components/PromocaoCarousel";
import LendariosCarousel from "../../components/LendariosCarousel";
import { Pagination } from '@material-ui/lab';
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
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api.get(`/pokemon?limit=20&offset=${currentPage}`).then((response) => {
      setPokemons(response.data.results);
    });
  }, [currentPage]);


  const onPaginationClick = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setCurrentPage(value * 20 - 20);
  };

  const totalPage = Math.ceil(800 / 20);

  const [text, setText] = useState("");

  const onChange = (q: any) => {
    setText(q);
    setQuery(q);
  };

  const renderPokemonsList = () => {
    const pokemonsList: JSX.Element[]= [];

    pokemons.forEach((pokemon: any) => {
      if (!pokemon.name.includes(query)) {
        return;
      }

      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
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
          <input type="text" placeholder="Pesquisar" value={text} onChange={(e) => onChange(e.target.value)}/>
        </Input>
        <ButtonsTypes>
          {typesButtons.map((type) => (
            <TypeButton color={type}> {type} </TypeButton>
          ))}
        </ButtonsTypes>
      </Search>
      <ContainerCard id='containerCard'>
        {/* {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })} */}
        {renderPokemonsList()}
        <AnchorLink href="#containerCard">
        <Pagination count={totalPage} page={page} onChange={onPaginationClick} />
        </AnchorLink>
      </ContainerCard>
      <Top>
        <button >
          <AnchorLink href="#logo">↑</AnchorLink>
        </button>
      </Top>
    </Container>
  );
}
