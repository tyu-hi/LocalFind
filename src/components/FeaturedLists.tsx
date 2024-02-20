import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedLists = () => {
  // Sample random image links
  const randomImageLinks = [
    "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Pepperoni-Pizza-1.jpg", // Example placeholder link
    "https://st5.depositphotos.com/28053878/62733/i/1600/depositphotos_627332410-stock-photo-vertical-photo-sssorted-indian-food.jpg", // Example placeholder link
    "https://www.modernfarmhouseeats.com/wp-content/uploads/2021/03/chili-lime-shrimp-ramen-2-scaled.jpg", // Example placeholder link
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <div className="featured-lists">
      <h2>Featured Lists</h2>
      <Slider {...settings}>
        {randomImageLinks.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Cuisine ${index + 1}`} />
            <div className="card-content">
              <h3>Cuisine Category {index + 1}</h3>
              <p>Description of Cuisine Category {index + 1}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedLists;
