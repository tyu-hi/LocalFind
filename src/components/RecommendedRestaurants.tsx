//import * as React from 'react';
import "./RecommendedRestaurants.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from '../firebase/firebase';
import { FIREBASE_STORAGE } from '../firebase/firebase';


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
    <h1> Recommended Restaurants: </h1>
    <ul> 
      {recommendedRestaurants.map((restaurant, index) => (
        <li key = {index}> 
        {restaurant}
        </li>
      ))}
    </ul>
  </div>
  );
 }

export default RecommendedRestaurants;