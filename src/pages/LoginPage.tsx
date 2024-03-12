import {useState} from "react";
import {FIREBASE_AUTH} from "../firebase/firebase";
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
            console.log(userCredentials);   //perhaps we shouldn't be showing this for privacy reasons!!
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    return (
        <div className = "sign-in">
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
                
                <button type = "submit" className="submit-button">Sign In</button>
                <hr />
                <Link to="/signup" ><button className='link-to-su'>Sign Up</button></Link>
                
            </form>
        </div>

    );
};

export default LoginPage;

