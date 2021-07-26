import { Item } from './styles';
import Carousel from 'react-elastic-carousel'
import BannersCarousel from '../../services/DatasCarousel/poketeste';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


const PromocaoCarousel= () => {

  return(
    <div>
      <h2>Veja as ofertas do dia!</h2>
    <Carousel isRTL={false} breakPoints={breakPoints}>
    {BannersCarousel.map((Pokemon) => (
            <Item key={Pokemon.id}>
              <img src={Pokemon.image} alt="Pokemon Promoção"/>
              <h2> {Pokemon.name} </h2>
              <p> {Pokemon.types} | {Pokemon.abilities} </p>
              <h3>R$ 18000,00</h3>
              <p>Em até 12x sem juros</p>
              <button> Adicionar ao carrinho </button>
            </Item>
          ))}
   </Carousel>
   </div>
  )
}

export default PromocaoCarousel;