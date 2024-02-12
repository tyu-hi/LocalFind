
//import AddRestuarant from './pages/AddRestaurant'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import FeaturedLists from '../components/FeaturedLists'
import Footer from '../components/Footer'
import RecommendedRestaurants from '../components/ReccomendedRestaurants'

//import { Navbar } from 'react-bootstrap'

const LandingPage = () => {
  return (
      <div>
        <NavBar/>
        <SearchBar/>
        <FeaturedLists />
        <RecommendedRestaurants />
        <Footer />
        
      </div>
  )
}

export default LandingPage