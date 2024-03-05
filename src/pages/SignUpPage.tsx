//move sign up stuff here
import NavBar from '../components/NavBar'
import { userState } from "react";


const SignUpPage = () => {
  const[action, setAction] = useState("Sign Up")


 return (


   <div>
     <NavBar/>
     <div className="header">
       <div className="title">Welcome back.
       Sign in to your account</div>
       <form>
         <input type="email" placeholder='example@example.com'/>
         <input type="password" />
         </form>
       <div className='submit-container'>
         <div className={action }>Sign In</div>
         <div className='submit'>Sign Up</div>
       </div>
     </div>
  
   </div>
 )
}


export default SignUpPage

