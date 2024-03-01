//import React from 'react'
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import { useLocation } from 'react-router-dom';


const SearchPage = () => {
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
        <div className="flex flex-row">
          
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
        </div>


    </div>
    
  )
}

export default SearchPage