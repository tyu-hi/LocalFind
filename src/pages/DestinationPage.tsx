//import React from 'react'
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import { useLocation } from 'react-router-dom';


const DestinationPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  const handleSubmit = (searchValue: string) => {
    // Handle form submission here if needed
  };

  return (
    <div>
        <NavBar/>

        {/*search*/}
        <div className="mt-10">
            <SearchBar onSubmit={handleSubmit} defaultValue={query}/>
        </div>
        {/*sort by filters*/}


    </div>
    
  )
}

export default DestinationPage