import * as React from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
//import { useHistory } from "react-router-dom";


//note: Tingyu changed the css here if that's ok!
{/*
    <div className="bar">
      <input className="searchbar" placeholder="Find A Restaurant!" type="text" title="Search" />
    </div>
*/}

interface SearchBarProps {
  defaultValue?: string;
  onSubmit: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ defaultValue = "", onSubmit }) => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="bar flex items-center ">
        <input
          className="searchbar bg-white shadow-lg text-gray-600 w-full p-3"
          placeholder="Enter location!"
          type="text"
          title="Search"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit">
          <IoIosSearch size={32} className="ml-1" />
        </button>
      </div>
    </form>
  );
};


export default SearchBar;
