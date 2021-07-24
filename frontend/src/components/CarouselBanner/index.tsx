import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../assets/banners/img.jpeg";
import segundoBanner from "../../assets/banners/img1.jpg";
import terceiroBanner from "../../assets/banners/img2.jpeg";
import NavBar from "../NavBar";

function CarouselBanner() {
  return  (
   <>
   <NavBar/>   
    <Carousel
    autoPlay={true}
    showThumbs={false}
    infiniteLoop={true}
    showStatus={false}
    transitionTime= {100}
    interval={10000}
    >
      <div key={1}>
        <img alt="banner" src={banner} />
      </div>
      <div key={2}>
        <img src={segundoBanner} alt="segundo banner"/>
      </div>
      <div key={3}>
        <img alt="terceiro banner" src={terceiroBanner} />
      </div>
    </Carousel>
    </>
  )
}

export default CarouselBanner