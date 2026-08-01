import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import Tsu from "../assets/TsunZu.png"
import JsBook from "../assets/JSBook.png"
import Oz from"../assets/Oz.jpg"
import "../style/Carousel.css"

function CarouselComponent() {
  return (
    <Carousel data-bs-theme ="dark">
      
        <Carousel.Item>
          <a href="">
            <CarouselImage text="First slide" image={Tsu} />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

 

      <Carousel.Item >
        <a href="">
        <CarouselImage text="Second slide"  image={JsBook} />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="">
        <CarouselImage text="Third slide" image={Oz}/>
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;