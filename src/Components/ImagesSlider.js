import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from './CardCommon';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div style={{width:"65rem"}}>
      <Slider {...settings} arrows={false} >
        <div>
        <Card
                title="Just Do It"
                subtitle="Movie • Action"
                imagePath="https://staging.api.moviemint.net/uploads/creator/0x4c856a25a605835862f9153e6b1c3cecb468a8e4/0x4c856a25a605835862f9153e6b1c3cecb468a8e41709270458169.jpeg"
            />
        </div>
        <Card
                title="499 Part 3"
                subtitle="Movie • Action"
                imagePath="https://staging.api.moviemint.net/uploads/creator/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e77/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709269324080.jpg"
            />
        <Card
                title="Rocket V0Hmi"
                subtitle="Movie • Action"
                imagePath="https://staging.api.moviemint.net/uploads/creator/0x4c856a25a605835862f9153e6b1c3cecb468a8e4/0x4c856a25a605835862f9153e6b1c3cecb468a8e41709270058694.jpeg"
            />
            <Card
                title="Just Do It"
                subtitle="Movie • Action"
                imagePath="https://staging.api.moviemint.net/uploads/creator/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e77/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771709267675708.jpg"
            />
      </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
