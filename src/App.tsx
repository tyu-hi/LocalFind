
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AddRestuarant from './pages/AddRestaurant'
import Navbar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Cards from './components/FeaturedLists'
import Footer  from './components/Footer'
import RecommendedRestaurants from './components/ReccomendedRestaurants'

//import { Navbar } from 'react-bootstrap'

function App() {
  return (
      <div>
        <Navbar/>
        <SearchBar/>
        <Cards />
        <RecommendedRestaurants />
       <Footer />
        
      </div>
  )
}

export default App
