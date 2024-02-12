import {useState} from "react";
import {FIREBASE_AUTH} from "../firebase/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

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

    const signUp = (e: any) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            console.log(userCredentials);
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
                value= {email} 
                onChange = {(e) => setEmail(e.target.value)}></input>
                <input type = "password" 
                placeholder = "Enter your password" 
                value= {password} 
                onChange = {(e) => setPassword(e.target.value)}></input>
                <button type = "submit">Sign Up</button>
            </form>

            Already have an account? <Link to="/login">Login</Link>
        </div>

    );
};

export default SignUp;