import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpForm from './pages/SignUpPage';
import AddRestaurantPage from './pages/AddRestaurantPage';
import RestaurantView from './pages/RestaurantView';
import SearchPage from './pages/SearchPage';
import UserSurvey from './pages/UserSurvey';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/addrestraunt" element={<AddRestaurantPage/>} />
        <Route path="/view/:id" element={<RestaurantView/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/survey" element={<UserSurvey/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
