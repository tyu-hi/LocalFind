
//import AddRestuarantForm from './pages/AddRestaurantForm'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import FeaturedLists from '../components/FeaturedLists'
import Footer from '../components/Footer'
import RecommendedRestaurants from '../components/RecommendedRestaurants'

//import { Navbar } from 'react-bootstrap'

const LandingPage = () => {
  return (
      <div>
        <NavBar/>
        <h1 className="text-3xl mt-10 text-center font-bold ">
            Title
            
        </h1>
        <SearchBar/>
        <FeaturedLists />
        <RecommendedRestaurants />
        <Footer />
        
      </div>
  )
}

export default LandingPage