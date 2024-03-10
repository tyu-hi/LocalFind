//import AddRestuarantForm from './pages/AddRestaurantForm'
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import FeaturedLists from "../components/FeaturedLists";
import RecommendedRestaurants from "../components/RecommendedRestaurants";
import { useNavigate } from "react-router-dom";
import QuickAndAffordableDinners from "../components/QuickAndAffordableDinners";
//import { useHistory } from 'react-router-dom'

//import { Navbar } from 'react-bootstrap'

const LandingPage = () => {
  //get search query
  const navigate = useNavigate();
  //const urlParams = new URLSearchParams(window.location.search);
  //const query = urlParams.get('query') || '';
  const handleSearchSubmit = (searchValue: string) => {
    navigate(`/search?query=${searchValue}`);
  };
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl mt-20 text-center text-primary font-serif display">
        Unearth Local Flavors - Your Next Favorite Dish Awaits.
      </h1>
      <SearchBar onSubmit={handleSearchSubmit} />

      <section className="mt-56">
        <FeaturedLists />
        {/*recommended restraunts here*/}
        <QuickAndAffordableDinners />
      </section>

      <footer className="mt-16 text-center p-4 bg-secondary-1 text-text-1 text-primary">
        © 2024 Local Finds. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
