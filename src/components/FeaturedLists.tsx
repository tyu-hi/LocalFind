import * as React from 'react';

const FeaturedLists = () => {
  // Sample random image links
  const randomImageLinks = [
    "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Pepperoni-Pizza-1.jpg", // Example placeholder link
    "https://st5.depositphotos.com/28053878/62733/i/1600/depositphotos_627332410-stock-photo-vertical-photo-sssorted-indian-food.jpg", // Example placeholder link
    "https://www.modernfarmhouseeats.com/wp-content/uploads/2021/03/chili-lime-shrimp-ramen-2-scaled.jpg", // Example placeholder link
  ];

  return (
    <div className="featured-lists">
      <h2>Featured Lists</h2>
      <div className="card-container">
        <div className="card">
          <img src={randomImageLinks[0]} alt="Cuisine 1" />
          <div className="card-content">
            <h3>Cuisine Category 1</h3>
            <p>Description of Cuisine Category 1</p>
          </div>
        </div>
        <div className="card">
          <img src={randomImageLinks[1]} alt="Cuisine 2" />
          <div className="card-content">
            <h3>Cuisine Category 2</h3>
            <p>Description of Cuisine Category 2</p>
          </div>
        </div>
        <div className="card">
          <img src={randomImageLinks[2]} alt="Cuisine 3" />
          <div className="card-content">
            <h3>Cuisine Category 3</h3>
            <p>Description of Cuisine Category 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLists;
