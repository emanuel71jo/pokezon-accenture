import { Item } from './styles';
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


const PromocaoCarousel= () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return(
    <div>
      <h2>Veja as ofertas do dia!</h2>
  <Carousel isRTL={false} breakPoints={breakPoints}>
    {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
   </Carousel>
   </div>
  )
}

export default PromocaoCarousel;