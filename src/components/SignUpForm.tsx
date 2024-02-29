import {useState} from "react";
import {FIREBASE_AUTH, FIREBASE_FIRESTORE} from "../firebase/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
import {collection} from "firebase/firestore";
import {addDoc} from "firebase/firestore";


const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [favoriteCuisine, setFavoriteCuisine] = useState("");
    const [secondFavoriteCuisine, setSecondFavoriteCuisine] = useState("");
    const [thirdFavoriteCuisine, setThirdFavoriteCuisine] = useState("");
    const [preferredPriceRange, setPreferredPriceRange] = useState("");
    const [modeOfFood, setModeOfFood] = useState("");
    const cuisines  = ["American", "Chinese", "Korean", "Fusion", "Thai", 
        "Indian", "Medeterranian", "Mexican", "Vietnamese", "African" ];
    const costRange = ["$10-20", "$20-$50", "$50+"];
    const modeOfFoodOptions = ["Foodtrucks", "Sit-down Restaurants"];
    //const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const firestore = FIREBASE_FIRESTORE;
    const colRef = collection(firestore, 'Users');

    const signUp = (e: any) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            console.log(userCredentials);

            addDoc(colRef, {
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,
                favoriteCuisine: favoriteCuisine,
                secondFavoriteCuisine: secondFavoriteCuisine,
                thirdFavoriteCuisine: thirdFavoriteCuisine,
                preferredPriceRange: preferredPriceRange,
                modeOfFood : modeOfFood,
            }).then(() => {
            console.log("user data added to firestore")
            }).catch((error: any) => {
                console.error("Error adding user data to Firestore:", error);
                alert('Sign up failed: ' + error.message);
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };


    return (
        <div>
            <form onSubmit = {signUp}>
                <h1> Create An Account</h1>
                <input type = "email" 
                placeholder = "Enter your email" 
                style={{ color: 'black' }}
                value= {email} 
                onChange = {(e) => setEmail(e.target.value)}></input>
                <input type = "password" 
                placeholder = "Enter your password" 
                value= {password} 
                style={{ color: 'black' }}
                onChange = {(e) => setPassword(e.target.value)}></input>
                <label htmlFor="favorite-cuisine">Select your favorite cuisine:</label>
                <select
            value={favoriteCuisine}
          onChange={(e) => setFavoriteCuisine(e.target.value)}
            >
          {cuisines.map((cuisine, index) => (
            <option key={index} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <label htmlFor="second-favorite-cuisine">Select your  second favorite cuisine:</label>
        <select
            value={secondFavoriteCuisine}
          onChange={(e) => setSecondFavoriteCuisine(e.target.value)}
            >
          {cuisines.map((cuisine, index) => (
            <option key={index} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <label htmlFor="third-favorite-cuisine">Select your third favorite cuisine:</label>
        <select
            value={thirdFavoriteCuisine}
            onChange={(e) => setThirdFavoriteCuisine(e.target.value)}
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
            >
          {modeOfFoodOptions.map((modeOptions, index) => (
            <option key={index} value={modeOptions}>
              {modeOptions}
            </option>
          ))}
        </select>
                <button type = "submit">Sign Up</button>
            </form>

            Already have an account? <Link to="/login">Login</Link>
        </div>

    );
};

export default SignUpForm;


// const signup = async () => {
    //     setLoading(true)
    //     try{
    //         const response = await createUserWithEmailAndPassword(auth, email, password);
    //         console.log(response);
    //     }
    //     catch (error: any ){
    //         console.log(error);
    //         alert('Sign up failed: ' + error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // }