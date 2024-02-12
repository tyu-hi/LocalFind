import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';

const LoginPage = () => {
  return (
   <div className="LoginPage">
      <LoginForm />
        <h3> If you do not have an account please make one!</h3> 
      <SignUp />
    </div>
  )
}

export default LoginPage;