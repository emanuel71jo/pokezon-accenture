import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../assets/banners/img.jpeg";
import segundoBanner from "../../assets/banners/img1.jpg";
import terceiroBanner from "../../assets/banners/img2.jpeg";
import quartoBanner from "../../assets/banners/img4.png";
import NavBar from "../NavBar";

function CarouselBanner() {
  return (
    <>
      <NavBar />
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        transitionTime={100}
        interval={5000}
      >
        <div key={1}>
          <img alt="primeiro banner" src={banner} />
        </div>
        <div key={2}>
          <img src={segundoBanner} alt="segundo banner" />
        </div>
        <div key={3}>
          <img alt="terceiro banner" src={terceiroBanner} />
        </div>
        <div key={4}>
          <img alt="quarto banner" src={quartoBanner} />
        </div>
      </Carousel>
    </>
  );
}

export default CarouselBanner;
