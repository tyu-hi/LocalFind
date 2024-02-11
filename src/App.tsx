
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AddRestuarant from './pages/AddRestaurant'
import Navbar from './components/NavBar'
import SearchBar from './components/SearchBar'
//import { Navbar } from 'react-bootstrap'

function App() {
  return (
      <div>
        <Navbar/>
        <SearchBar/>

      </div>
  )
}

export default App
