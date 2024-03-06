//import * as React from 'react';
import "./RecommendedRestaurants.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from '../firebase/firebase';
import { FIREBASE_STORAGE } from '../firebase/firebase';


const getRecommendations = (uid : string): Promise<string[]> => {
      return fetch('http://localhost:5174/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'userID': uid})
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
           return response.json()
          })
        .then(data => {return data})
        .catch(error => {
          console.error('Error:', error);
      })
}

const getUserID = () : Promise<string> => {
  const auth = FIREBASE_AUTH;
  const currentUser = auth.currentUser;
  console.log("Current User:", currentUser);
  if (currentUser)
    return Promise.resolve(currentUser.uid)
  else
    return Promise.resolve("no user found")
}

const RecommendedRestaurants = () => {

  const [RecommendedRestaurants , setRecommendedRestaurants] = useState<string[]>([]);
  const [userID , setUserID] = useState('')

  useEffect(() => {
    const reassign = FIREBASE_AUTH.onAuthStateChanged((user) => {
      console.log("Auth state changed. Current User:", user);
      if (user){
        setUserID(userID)
      }
      else{
        setUserID("no user found")
      }

    });
    return () => reassign()
  }, []);

  useEffect(() => {
    console.log("Component rendered");
    getUserID().then( userID => {
    setUserID(userID)
    console.log("UserID on useEffect:", userID);
    if (userID !=="no user found"){
      getRecommendations(userID)
      .then(restaurants => {
        setRecommendedRestaurants(restaurants);
        console.log(RecommendedRestaurants);
      })
      .catch(error => {
        console.log("error: ", error)
      });
    }
  });
}, [userID]);

useEffect(() => {
  console.log("Recommended Restaurants:", RecommendedRestaurants);
}, [RecommendedRestaurants]);


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
      <div className="pt-10 pb-10 ">
        <div className="font-sans font-semibold text-2xl text-left mb-2 pl-12">
          Recommended By Users
        </div>
        
          <div className="w-72 border-b-2 border-black "></div>
        
      </div>
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
