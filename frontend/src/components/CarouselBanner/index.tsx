import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselBanner() {
  return (
    <Carousel
    autoPlay={true}
    showThumbs={false}
    infiniteLoop={true}
    showStatus={false}
    transitionTime= {100}
    interval={10000}
    >
      <div>
        <img src="assets/1.jpeg" />
      </div>
      <div>
        <img src="assets/2.jpeg" />
      </div>
      <div>
        <img src="assets/3.jpeg" />
      </div>
      <div>
        <img src="assets/4.jpeg" />
      </div>
    </Carousel>
  )
}

export default CarouselBanner