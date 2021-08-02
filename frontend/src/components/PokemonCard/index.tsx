import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { Card, Subtitulo, ButtonDetalhes, Button } from './styles'



const PokemonCard = ({ pokemon }: any) => {
    const [pokemonId, setPokemonId] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const [imagePokemon, setImagePokemon] = useState("");

    useEffect(() => {
      const loadIdPokemon = async () => {
        await axios.get(pokemon.url).then((response) => {
          setPokemonId(response.data.id);
          setPokemonTypes(response.data.types[0].type.name);
          setPokemonAbilities(response.data.abilities[0].ability.name);
          
        });
        if (String(pokemonId).length === 1) {
            setImagePokemon ( `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonId}.png`)
        } else if (String(pokemonId).length === 2) {
            setImagePokemon ( `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemonId}.png`)      
          } else {
            setImagePokemon ( `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`)       }
      };

      loadIdPokemon();
    }, [pokemon.url, pokemonId]);
  
    const nameCapitalized = pokemon.name.split("-")[0];
    
    const [isModalOpen, setModalState] = useState(false);
    const toggleModal = () => setModalState(!isModalOpen);

      return (
        <Card>
          <img
            src={imagePokemon}
            alt="Pokemon"
          />
          <h2> {nameCapitalized} </h2>
          <Subtitulo>{pokemonTypes} | {pokemonAbilities}</Subtitulo>

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
      );
    
  };
  
  export default PokemonCard;