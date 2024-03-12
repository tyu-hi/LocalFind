import {useState} from "react";
import NavBar from "../components/NavBar";
import {FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


const LoginPage = () => {
    //redirect page
    const navigate = useNavigate();

    //login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = FIREBASE_AUTH;
    const firestore = FIREBASE_FIRESTORE;
    const colRef = collection(firestore, "Users");

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            // const user = userCredentials.user; 
            // colRef.doc(user_email)
            // .get()
            // .then(function(user)){
            //   if(user.exists){

            //   }
            // }
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    return (
        <div className = "sign-in">
          <NavBar />
            <form onSubmit = {signIn}>
                <h1 className="big-header"> Welcome Back. <br />
                Sign in to your account </h1>
                <input type = "email" 
                placeholder = "Email" 
                className="email"
                value= {email} 
                onChange = {(e) => setEmail(e.target.value)}></input>
                <input type = "password" 
                placeholder = "Password" 
                className="pass"
                value= {password} 
                onChange = {(e) => setPassword(e.target.value)}></input>
                
                <Link to="/"><button type = "submit" className="submit-button">Sign In</button></Link>
                <div className="or"> or </div>
                <Link to="/signup" ><button className='link-to-su'>Sign Up</button></Link>
                
            </form>
        </div>

    );
};

export default LoginPage;

