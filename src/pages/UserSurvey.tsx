import NavBar from '../components/NavBar'
import { useState } from "react";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { addDoc, updateDoc } from "firebase/firestore";
import { Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const UserSurvey = () => {
  const navigate = useNavigate();
  
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
  const auth = FIREBASE_AUTH;
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
            navigate("/");
            
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
        User survey stuff
    </div>
  )
}

export default UserSurvey