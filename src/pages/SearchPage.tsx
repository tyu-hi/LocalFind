//import React from 'react'
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import { useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FIREBASE_FIRESTORE } from "../firebase/firebase";


const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get('query') || '';

  //firesstore query////////////////////////////
  const [cityNotFound, setCityNotFound] = useState(false); // State to track if city is not found
  const [city, setCity] = useState(queryParam);
  const [restaurants, setRestaurants] = useState<{ 
    id: string; 
    address: string;
    restaurantName: string; 
    city: string; 
    foodStyle: string; 
    price: number; 
    imageURL: string; }[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const q = query(collection(FIREBASE_FIRESTORE, 'restaurants'), where('city', '==', city));
      const querySnapshot = await getDocs(q);
      const fetchedRestaurants: { id: string, address: string, restaurantName: string, city: string, foodStyle: string, price: number, imageURL: string }[] = [];
      querySnapshot.forEach((doc) => {
        const restaurantData = doc.data();
        fetchedRestaurants.push({ 
          id: doc.id,
          address: restaurantData.address || 'Search up a city and we will recommend you a local restaurant!',
          restaurantName: restaurantData.restaurantName || 'What do you want to eat?',
          city: restaurantData.city || 'Default City',
          foodStyle: restaurantData.foodStyle || 'Feeling a specific cuisine?',
          price: restaurantData.price || 'Have a price range?',
          imageURL: restaurantData.imageURL || 'https://static.thenounproject.com/png/1181336-200.png'  //Local Find logo?
        });
      });

      
      if (fetchedRestaurants.length === 0) {
        setCityNotFound(true); // Set city not found if no restaurants found
      } else {
        setCityNotFound(false); // Reset city not found if restaurants found
      }

      setRestaurants(fetchedRestaurants);
    };
    fetchRestaurants();
  }, [city]);

  const handleSubmit = (searchValue: string) => {
    setCity(searchValue);
  };

  return (
    <div className="font-alata">
        <NavBar/>

        {/*search*/}
        
          <SearchBar onSubmit={handleSubmit} defaultValue={queryParam}/>
        
            {/*[300px_300px_300px] sets the individual width of each of the 3 columns in tailwind*/}
            <div className="mx-auto grid grid-cols-[400px_600px_300px] mt-20">
              {/* Sort by filters */}
              <div className="col-span-1">
                  <div className="p-4 font-alata ml-20">
                      <h2 className="text-xl font-semibold mb-4">Filters</h2>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Tags</h3>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2 bg-white"/>
                              <label htmlFor="tag1">Vegetarian</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2 bg-white"/>
                              <label htmlFor="tag2">Italian</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2 bg-white"/>
                              <label htmlFor="tag3">Chinese</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag4" className="mr-2 bg-white"/>
                              <label htmlFor="tag4">Korean</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag5" className="mr-2 bg-white"/>
                              <label htmlFor="tag5">Japanese</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag6" className="mr-2 bg-white"/>
                              <label htmlFor="tag6">...</label>
                          </div>
                      </div>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Features</h3>
                          {/* Add checkboxes for features */}
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2 bg-white"/>
                              <label htmlFor="tag1">Outdoor seating</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2 bg-white"/>
                              <label htmlFor="tag2">Parking</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2 bg-white"/>
                              <label htmlFor="tag3">Takeout</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag4" className="mr-2 bg-white"/>
                              <label htmlFor="tag4">Delivery</label>
                          </div>
                          
                      </div>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Budget</h3>
                          {/* Add checkboxes for budget */}
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2 bg-white"/>
                              <label htmlFor="tag1">$10-20</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2 bg-white"/>
                              <label htmlFor="tag2">$20-50</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2 bg-white"/>
                              <label htmlFor="tag3">$50+</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag4" className="mr-2 bg-white"/>
                              <label htmlFor="tag4">Korean</label>
                          </div>
                      </div>
                      <div className="mb-4">
                          <h3 className="text-sm font-semibold mb-2">Distance</h3>
                          {/* Add checkboxes for distance */}
                          <div className="flex items-center">
                              <input type="checkbox" id="tag1" className="mr-2 bg-white"/>
                              <label htmlFor="tag1">5 miles</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag2" className="mr-2 bg-white"/>
                              <label htmlFor="tag2">5-10 miles</label>
                          </div>
                          <div className="flex items-center">
                              <input type="checkbox" id="tag3" className="mr-2 bg-white"/>
                              <label htmlFor="tag3">10+ miles</label>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Recommended Businesses */}
              <div className="col-span-1">
                <div className="p-4">
                  {cityNotFound ? (
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-3xl text-gray-900 mt-5">Let us help you find a restaurant! </p>
                      <p className="text-lg text-gray-700 mt-5">Can't find your city? No worries, new cities coming soon! </p>
                      <img src="/localfind.png" alt="localfind" />
                    </div>

                  ) : (
                    <>
                      <h2 className="text-md mb-4">{city ? `Recommended restaurants near ${city}` : ""}</h2>
                      {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="flex items-center border border-navyblue border-2 rounded-lg p-4 mb-4">
                          <img src={restaurant.imageURL} alt={restaurant.restaurantName} className="w-32 h-32 object-cover rounded-lg mr-4" />
                          <div>
                            <h3 className="text-2xl">{restaurant.restaurantName}</h3>
                            <div className="flex mt-2">
                              <div className="rounded-full bg-blue-900 text-white px-2 py-1 text-xs mr-2">{restaurant.foodStyle}</div>
                              <div className="rounded-full bg-blue-900 text-white px-2 py-1 text-xs">{restaurant.price}</div>
                            </div>
                            <p className="text-sm mt-10">{restaurant.address}</p>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Map */}
              <div className="col-span-1 ml-20">
                  <div className="bg-gray-200 p-4">
                      <h2 className="text-lg font-semibold mb-4">Map</h2>
                  </div>
              </div>

          </div>


    </div>
    
  )
}

export default SearchPage