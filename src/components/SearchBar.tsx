import * as React from "react";
import { IoIosSearch } from "react-icons/io";


//note: Tingyu changed the css here if that's ok!
{/*
    <div className="bar">
      <input className="searchbar" placeholder="Find A Restaurant!" type="text" title="Search" />
    </div>
*/}

class SearchBar extends React.Component {
  render() {
    return (
    

      <div className="bar flex items-center bg-white ">
          <input
            className="searchbar bg-white text-gray-600" // Set background color to white and text color to gray-600
            placeholder="Enter location!"
            type="text"
            title="Search"
          />
          
        
        <IoIosSearch size={32} className="ml-1"/>
        
      </div>

    
      
    );
  }
}

export default SearchBar;
