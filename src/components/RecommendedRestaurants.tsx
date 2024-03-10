
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles

        
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

  const [recommendedRestaurants , setRecommendedRestaurants] = useState<string[]>([]);
  const [userID , setUserID] = useState('')
  const [found, setFound] = useState(false);

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
        console.log(recommendedRestaurants);
      })
      .catch(error => {
        console.log("error: ", error)
      });
    }
  });
}, [userID]);


useEffect(() => {
  console.log("Recommended Restaurants:", recommendedRestaurants);
  setRecommendedRestaurants(recommendedRestaurants);
  setFound(true)
}, [recommendedRestaurants]);
     
  // Function to generate restaurant cards
  const generateRestaurantCards = () => {
    
    // Logic to fetch restaurant data and generate cards can be added here
    // For now, returning a placeholder array
    return recommendedRestaurants
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

<<<<<<< HEAD
// Render loading message if recommendedRestaurants is empty
// Render loading message if loading
if (recommendedRestaurants.length == 0) {
  console.log("Data not found");
  return <div>Data not found.</div>;
}
console.log( "Recommended Restaurants to be returned" , recommendedRestaurants  )
=======

const restaurantsList = Array.isArray(recommendedRestaurants) ? recommendedRestaurants : [];
console.log("just before", restaurantsList)
console.log("Recommended Restaurants:", recommendedRestaurants);
>>>>>>> parent of 3986be2 (fixed python script for recommendations)
console.log("Type of recommendedRestaurants:", typeof recommendedRestaurants);
return (
  <div>
    <h1>Recommended Restaurants:</h1>
    <ul>
      {restaurantsList.map((restaurant, index) => (
        <li key={index}>{restaurant}</li>
      ))}
    </ul>
  </div>
);
};

export default RecommendedRestaurants;
