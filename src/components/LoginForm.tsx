import {useState} from "react";
import {FIREBASE_AUTH} from "../firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = FIREBASE_AUTH;

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredentials) => {
            console.log(userCredentials);
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    return (
        <div className = "sign-in">
            <form onSubmit = {signIn}>
                <h1> Log In</h1>
                <input type = "email" 
                placeholder = "Enter your email" 
                value= {email} 
                onChange = {(e) => setEmail(e.target.value)}></input>
                <input type = "password" 
                placeholder = "Enter your password" 
                value= {password} 
                onChange = {(e) => setPassword(e.target.value)}></input>
                
                <button type = "submit">Log In</button>
                
            </form>
        </div>

    );
};

export default LoginForm;

