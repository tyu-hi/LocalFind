import {useState} from "react";
import NavBar from "../components/NavBar";
import logo from "/localfind.png"
import {FIREBASE_AUTH,} from "../firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


const LoginPage = () => {
    //redirect page
    const navigate = useNavigate();

    //login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = FIREBASE_AUTH;

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
          console.log(userCredentials);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    return (
        
        <div className = "sign-in font-alata">
          <NavBar />
            <form onSubmit = {signIn}>
                <h1 className="big-header"> Welcome Back. <br />
                Sign in to your account </h1>
                <input type = "email" 
                placeholder = "Email" 
                className="email bg-white"
                value= {email} 
                onChange = {(e) => setEmail(e.target.value)}></input>
                <input type = "password" 
                placeholder = "Password" 
                className="pass bg-white"
                value= {password} 
                onChange = {(e) => setPassword(e.target.value)}></input>
                
                <button type = "submit" className="submit-button hover:bg-blue-900">Sign In</button>
                <hr />
                <Link to="/signup" ><button className='link-to-su hover:bg-gray-300'>Sign Up</button></Link>
            </form>
            <img src={logo} alt="Brand Logo" className="logo-img"></img>
        </div>

    );
};

export default LoginPage;

