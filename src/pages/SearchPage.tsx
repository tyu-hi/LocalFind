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
        
          <SearchBar onSubmit={handleSubmit} defaultValue={query}/>
        
            {/*[300px_300px_300px] sets the individual width of each of the 3 columns in tailwind*/}
            <div className="grid grid-cols-[400px_600px_300px] gap-2 mt-20">
              {/* Sort by filters */}
              <div className="col-span-1 ml-20">
                  <div className="p-4 font-alata">
                      <h2 className="text-xl font-semibold mb-4">Filters</h2>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Tags</h3>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2"/>
                              <label htmlFor="tag1">Vegetarian</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2"/>
                              <label htmlFor="tag2">Italian</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2"/>
                              <label htmlFor="tag3">Chinese</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag4" className="mr-2"/>
                              <label htmlFor="tag4">Korean</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag5" className="mr-2"/>
                              <label htmlFor="tag5">Japanese</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag6" className="mr-2"/>
                              <label htmlFor="tag6">...</label>
                          </div>
                      </div>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Features</h3>
                          {/* Add checkboxes for features */}
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2"/>
                              <label htmlFor="tag1">Outdoor seating</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2"/>
                              <label htmlFor="tag2">Parking</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2"/>
                              <label htmlFor="tag3">Takeout</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag4" className="mr-2"/>
                              <label htmlFor="tag4">Delivery</label>
                          </div>
                          
                      </div>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Budget</h3>
                          {/* Add checkboxes for budget */}
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2"/>
                              <label htmlFor="tag1">$10-20</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2"/>
                              <label htmlFor="tag2">$20-50</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2"/>
                              <label htmlFor="tag3">$50+</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag4" className="mr-2"/>
                              <label htmlFor="tag4">Korean</label>
                          </div>
                      </div>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Distance</h3>
                          {/* Add checkboxes for distance */}
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2"/>
                              <label htmlFor="tag1">5 miles</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2"/>
                              <label htmlFor="tag2">5-10 miles</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2"/>
                              <label htmlFor="tag3">10+ miles</label>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Recommended Businesses */}
              <div className="col-span-1">
                  <div className="p-4">
                      <h2 className="text-md mb-4">Recommended restraunts near {query}</h2>

                  </div>
              </div>

              {/* Map */}
              <div className="col-span-1">
                  <div className="bg-gray-200 p-4">
                      <h2 className="text-lg font-semibold mb-4">Map</h2>
                  </div>
              </div>
          </div>


    </div>
    
  )
}

export default SearchPage