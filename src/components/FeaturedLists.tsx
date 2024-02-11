import * as React from 'react';
import './FeaturedList.css'; // Import the CSS file

function FeaturedList() {
  return (
    <div className="featured-list">
      <div className="box">
        <a href="#">Featured List 1</a>
      </div>
      <div className="box">
        <a href="#">Featured List 2</a>
      </div>
      <div className="box">
        <a href="#">Featured List 3</a>
      </div>
    </div>
  );
}

export default FeaturedList;