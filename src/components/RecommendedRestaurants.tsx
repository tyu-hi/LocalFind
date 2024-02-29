//import * as React from 'react';
import "./RecommendedRestaurants.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedRestaurants = () => {
  // Function to generate restaurant cards
  const generateRestaurantCards = () => {
    // Logic to fetch restaurant data and generate cards can be added here
    // For now, returning a placeholder array
    return [
      {
        title: "Restaurant 1",
        description: "Description of Restaurant 1",
        image: "https://via.placeholder.com/300", // Example placeholder link
        link: "https://example.com/restaurant1",
      },
      {
        title: "Restaurant 2",
        description: "Description of Restaurant 2",
        image: "https://via.placeholder.com/300", // Example placeholder link
        link: "https://example.com/restaurant2",
      },
      {
        title: "Restaurant 3",
        description: "Description of Restaurant 3",
        image: "https://via.placeholder.com/300", // Example placeholder link
        link: "https://example.com/restaurant3",
      },
    ];
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Recommended Restaurants For You</h2>
      <Slider {...settings}>
        {generateRestaurantCards().map((restaurant, index) => (
          <div
            className="card mx-4 w-56 h-96 bg-white shadow-md rounded-lg overflow-hidden"
            key={index}
          >
            {" "}
            {/* Adjust width (w-64) and height (h-96) as needed */}
            <img
              src={restaurant.image}
              alt={restaurant.title}
              className="w-full h-36 object-cover rounded-t-lg"
            />{" "}
            {/* Adjust height (h-48) as needed */}
            <div className="card-content p-4">
              <h3>{restaurant.title}</h3>
              <p>{restaurant.description}</p>
              <a
                href={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Restaurant
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendedRestaurants;
