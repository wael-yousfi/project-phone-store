import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/iphone.jpg'
import img2 from '../../img/sophia.jpg'
import img3 from '../../img/store.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>       
        <img width={1300} height={700} alt="900x500" src={img1} />  
            </Carousel.Item>

            <Carousel.Item>
            <img width={1300} height={700} alt="900x500" src={img2} />  
       </Carousel.Item>
       
       <Carousel.Item>
            <img width={1900} height={700} alt="900x500" src={img3} />  
       </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;