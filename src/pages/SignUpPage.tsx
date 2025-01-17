import { useState } from "react";
import NavBar from "../components/NavBar";
import logo from "/localfind.png"
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

//navigate user to signup user survey
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //navigate usr
  const navigate = useNavigate();
  
  //const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const firestore = FIREBASE_FIRESTORE;
  const colRef = collection(firestore, "Users");

  const signUp = (e: any) => {
    e.preventDefault();

    // Check if the account already exists
    const queryRef = query(colRef, where("email", "==", email));
    getDocs(queryRef)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // Account already exists
          alert("An account with this email already exists.");

          // Clear input fields by resetting state variables
          setEmail("");
          setPassword("");
          setName("");
        } else {
          // Account does not exist, proceed with signup
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
              console.log(userCredentials);

              addDoc(colRef, {
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,
                name: name.trim(),
              })
                .then(() => {
                  alert("Signup successful!"); // Indicate a successful signup
                  console.log("User data added to Firestore");
                  navigate("/survey");

                  // Clear input fields by resetting state variables
                  setEmail("");
                  setPassword("");
                  setName("");

                })
                .catch((error) => {
                  console.error("Error adding user data to Firestore:", error);
                  alert("Sign up failed: " + error.message);
                });
            })
            .catch((error) => {
              console.error(error);
              alert("Sign up failed: " + error.message);
            });
        }
      })
      .catch((error) => {
        console.error("Error querying Firestore:", error);
        alert("An error occurred while checking for an existing account.");
      });
  };

  return (
    <div className="font-alata">
      <NavBar />
      <form onSubmit={signUp}>
        <h1 className="big-header "> Sign Up</h1>
        <input
          type="Name"
          placeholder="Name"
          value={name}
          className="username bg-white"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="email bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="pass bg-white"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit" className="submit-button hover:bg-blue-900">Sign Up</button>
      </form>
      <div className="extra">Already have an account?  <Link to="/login" color="#004D73" className="hover:text-blue-800 hover:underline">Sign in</Link></div>
      <img src={logo} alt="Brand Logo" className="logo-img"></img>
    </div>
  );
};

export default SignUpPage;


