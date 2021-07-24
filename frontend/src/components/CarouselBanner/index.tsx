import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../assets/banners/img.jpeg";
import img1 from "../../assets/banners/img1.jpg";
import img2 from "../../assets/banners/img2.jpeg";
import NavBar from "../NavBar";


function CarouselBanner() {
  return  (
   <>
   <NavBar/>
   
    <Carousel
    autoPlay={true}
    showThumbs={false}
   // infiniteLoop={true}
    showStatus={false}
    transitionTime= {100}
    interval={10000}
    >
      <div>
        <img alt="img" src={img} />
      </div>
      <div>
        <img alt="img" src={img1} />
      </div>
      <div>
        <img alt="img" src={img2} />
      </div>
      {/* <div> */}
        {/* <img alt="img" src={img} /> */}
      {/* </div> */}
    </Carousel>
    </>
  )
}

export default CarouselBanner