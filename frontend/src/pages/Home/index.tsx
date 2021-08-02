import CarouselBanner from '../../components/CarouselBanner'
import PromocaoCarousel from '../../components/PromocaoCarousel'
import LendariosCarousel from '../../components/LendariosCarousel'
import { Top, Card, Subtitulo, Container, ContainerCard, Search, TypeButton, ButtonsTypes, Input, ButtonDetalhes, Button } from './styles'
import MaisVendidos from '../../components/MaisVendidos'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Promo from '../../components/BannerSolo'
import { Modal } from '../../components/Modal/index'
import React, { useState, useEffect } from "react";


export function Home() {

  // const [datasPokemon, setdatasPokemon] = useState ([])

  // useEffect (() => {

  //   async function getData() {
  //       const response = await fetch (`https://pokeapi.co/api/v2/pokemon/1`) 
  //       const datas = await response.json() 
  //       setdatasPokemon(datas)
  //   }

  //   getData()

  // }, []  )
  // console.log(setdatasPokemon.[prototype])
  // console.log(datasPokemon)


  const typesButtons = [
    "Fire",
    "Dragon",
    "Bug",
    "Eletric",
    "Fairy",
    "Ice",
    "Poison",
    "Rock",
    "Grass",
    "Normal",
    "Ghost",
    "Water",
    "Steel",
    "Fighthing",
    "Flying",
    "Ground",
    "Psychic",
  ];
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
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
        <Card>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            alt="Pokemon"
          />
          <h2> Pikachu </h2>
          <Subtitulo>TIPO | HABILIDADE</Subtitulo>

          <h3>R$ 18000,00</h3>
          <Subtitulo>Em até 12x sem juros</Subtitulo>
          <Button> Adicionar ao carrinho </Button>
          <ButtonDetalhes
            onClick={toggleModal}>
            + detalhes
            </ButtonDetalhes>
            <Modal
              title={'My modal'}
              isOpen={isModalOpen}
              onClose={toggleModal}>
            
              </Modal>
        </Card>

           
              

              

         

      </ContainerCard>
      <Top>
        <button >
          <AnchorLink href="#logo">↑</AnchorLink>
        </button>
      </Top>
    </Container>

    

  );
}
