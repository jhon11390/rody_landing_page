import { Carousel } from 'react-bootstrap';


function CarouselValues({image1, image2, image3}) {
  return (
    <Carousel id="carouselRodyValues">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  )
}


export default CarouselValues;