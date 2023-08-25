import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../images/slider1.jpeg';
import slider2 from '../images/slider2.png';
import slider3 from '../images/slider3.avif';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="Slide 1" />
        </div>
        <div>
          <img src={slider2} alt="Slide 2" />
        </div>
        <div>
          <img src={slider3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
