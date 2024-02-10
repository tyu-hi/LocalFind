import React from 'react';
//import './src/index.css';


function Navbar() {
  return (
    <div className="flex-container">
      <h1 className="logo"><a href="#">Local Find</a></h1>
      <ul className="navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Demo</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}


export default Navbar;
