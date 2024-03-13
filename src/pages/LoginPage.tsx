import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
//import SignUp from '../components/SignUp';

const LoginPage = () => {
  return (
   <div className="LoginPage">
      <LoginForm />

      New to LocalFind? <Link to="/signup">Create an account</Link>
      
    </div>
  )
}

export default LoginPage;