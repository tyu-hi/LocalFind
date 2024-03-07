
//import AddRestuarantForm from './pages/AddRestaurantForm'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import FeaturedLists from '../components/FeaturedLists'
import RecommendedRestaurants from '../components/RecommendedRestaurants'
import { useNavigate } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'

//import { Navbar } from 'react-bootstrap'

const LandingPage = () => {
  //get search query
  const navigate = useNavigate();
  //const urlParams = new URLSearchParams(window.location.search);
  //const query = urlParams.get('query') || '';
  const handleSearchSubmit = (searchValue: string) => {
    navigate(`/search?query=${searchValue}`);
  }
  return (
      <div>
        <NavBar/>
        <h1 className="text-3xl mt-20 text-center font-bold font-serif mb-20">
            Title
            
        </h1>
        <SearchBar onSubmit={handleSearchSubmit}/>
        <FeaturedLists />
        <RecommendedRestaurants />
        
      </div>
  )
}

export default LandingPage