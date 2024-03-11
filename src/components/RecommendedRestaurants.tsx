
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
import { JSX } from 'react/jsx-runtime';

interface CardProps {
  title: string;
}

interface CardsContainerProps {
  cardsData: CardProps[];
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src= " https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt={`${title} image`}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center my-2">
          <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mr-2">
            4.3
          </span>
        </div>
      </div>
    </div>
  );
};

const CardsContainer: React.FC<CardsContainerProps> = ({ cardsData }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {cardsData.map((  restaurant, index ) => (
        <SwiperSlide key={index}>
          <Card title = {restaurant.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const getRecommendations = (uid : string): Promise<string[]> => {
  console.log("passing", uid);
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
        console.log(response)
        return response.json()
      })
    .then(data => {return data.restaurants})
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
    setUserID(user.uid) // Correctly set the user ID from the auth state
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
setFound(true)
}, [recommendedRestaurants]);

// Render loading message if recommendedRestaurants is empty
// Render loading message if loading
if (recommendedRestaurants.length == 0) {
  console.log("Data not found");
  return <div>Data not found.</div>;
}
console.log( "Recommended Restaurants to be returned" , recommendedRestaurants  )
console.log("Type of recommendedRestaurants:", typeof recommendedRestaurants);

return (
  <div>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center my-8">
          Quick And Affordable Dinners
        </h1>
        <CardsContainer cardsData={recommendedRestaurants.map(restaurant => ({ title: restaurant }))} />
      </div>
    </div>
  );
 }

export default RecommendedRestaurants;
