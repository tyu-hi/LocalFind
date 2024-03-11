import NavBar from '../components/NavBar'
import { useState } from "react";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { addDoc, updateDoc } from "firebase/firestore";
import { Nav } from 'react-bootstrap';

const UserSurvey = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [favoriteCuisine, setFavoriteCuisine] = useState("");
  const [secondFavoriteCuisine, setSecondFavoriteCuisine] = useState("");
  const [thirdFavoriteCuisine, setThirdFavoriteCuisine] = useState("");
  const [preferredPriceRange, setPreferredPriceRange] = useState("");
  const [modeOfFood, setModeOfFood] = useState("");
  const [updatedState, setUpdatedState] = useState("false");
  const cuisines = [
    "Select",
    "American",
    "Chinese",
    "Korean",
    "Thai",
    "Indian",
    "Medeterranian",
    "Mexican",
    "Vietnamese",
    "Italian",
    "Japanese",
  ];
  const costRange = ["Select", "$10-20", "$20-$50", "$50+"];
  const modeOfFoodOptions = ["Select", "Foodtrucks", "Sit-down Restaurants"];
  //const [loading, setLoading] = useState(false);
  const firestore = FIREBASE_FIRESTORE;
  const colRef = collection(firestore, "Users");
 

  const signUp = (e: any) => {
    e.preventDefault();

    const currentUser = FIREBASE_AUTH.currentUser;

    if (currentUser){
      const currentUserId = currentUser.uid
      console.log("hello, we have new user", currentUserId);

      const q = query(colRef, where('uid', '==' , currentUserId))

      getDocs(q)
      .then((querySnapshot) => {
       if (!querySnapshot.empty) {

        const firstDoc = querySnapshot.docs[0];
        const docID = firstDoc.id;
  
        // Create a Document Reference using doc() with the document ID
        const docRef = doc(firestore, 'Users', docID);


        // Update the document with new fields
        return updateDoc(docRef, {
          favoriteCuisine: favoriteCuisine,
          secondFavoriteCuisine: secondFavoriteCuisine,
          thirdFavoriteCuisine: thirdFavoriteCuisine,
          preferredPriceRange: preferredPriceRange,
          modeOfFood: modeOfFood
          })
          .then(() => {
            alert("We have updated your information")
          })
        .catch((error) => {
          console.error("Error updating document", error);
          alert("could not update, please try again later")
        })
    }
    else{
      console.log("sorry no mathcing user found")
      alert("could not find user")
    } 
  })
  .catch((error) => {
      console.log("error retrieving document", error)
    });
  }
}
  return (
      <div>
        <NavBar/>
        <form onSubmit={signUp}>
          <h1> Create An Account</h1>
          <label htmlFor="firstname">First Name:</label>
          <input
                    type="text"
                    name="firstname"
                    placeholder="your first name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label htmlFor="lastname">Last Name:</label>
          <input
                    type="text"
                    name="lasttname"
                    placeholder="your last name"
                    value={firstname}
                    onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label htmlFor="lastname">Where is your location:</label>
          <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={firstname}
                    onChange={(e) => setLocation(e.target.value)}
          ></input>
          <label htmlFor="favorite-cuisine">Select your favorite cuisine:</label>
          <select
            value={favoriteCuisine}
            onChange={(e) => setFavoriteCuisine(e.target.value)}
            required
          >
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <label htmlFor="second-favorite-cuisine">
            Select your second favorite cuisine:
          </label>
          <select
            value={secondFavoriteCuisine}
            onChange={(e) => setSecondFavoriteCuisine(e.target.value)}
            required
          >
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <label htmlFor="third-favorite-cuisine">
            Select your third favorite cuisine:
          </label>
          <select
            value={thirdFavoriteCuisine}
            onChange={(e) => setThirdFavoriteCuisine(e.target.value)}
            required
          >
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <label htmlFor="preferredPriceRange">preferred price range? :</label>
          <select
            value={preferredPriceRange}
            onChange={(e) => setPreferredPriceRange(e.target.value)}
            required
          >
            {costRange.map((cost, index) => (
              <option key={index} value={cost}>
                {cost}
              </option>
            ))}
          </select>
          <label htmlFor="mode">What is your preferred way to get food?:</label>
          <select
            value={modeOfFood}
            onChange={(e) => setModeOfFood(e.target.value)}
            required
          >
            {modeOfFoodOptions.map((modeOptions, index) => (
              <option key={index} value={modeOptions}>
                {modeOptions}
              </option>
            ))}
          </select>
          <button type="submit">Sign Up</button>
        </form>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    );

}


export default UserSurvey;