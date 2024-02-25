import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpForm from './components/SignUpForm';
import AddRestaurantPage from './pages/AddRestaurantPage';
import RestaurantView from './pages/RestaurantView';
import DestinationPage from './pages/DestinationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/addrestraunt" element={<AddRestaurantPage/>} />
        <Route path="/view" element={<RestaurantView/>} />
        <Route path="/destination" element={<DestinationPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
