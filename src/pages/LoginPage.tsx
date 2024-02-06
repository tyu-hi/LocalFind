import SignIn from '../components/SignIn';
import SignUp from '../components/Signup';

const LoginPage = () => {
  return (
   <div className="LoginPage">
      <SignIn />
    
    
    <h3> If you do not have an account please make one!</h3> 
    <SignUp />
    </div>
  )
}

export default LoginPage;