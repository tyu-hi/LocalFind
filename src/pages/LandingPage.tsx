import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import FeaturedLists from "../components/FeaturedLists";
import RecommendedRestaurants from "../components/RecommendedRestaurants";
import { useNavigate } from "react-router-dom";
import QuickAndAffordableDinners from "../components/QuickAndAffordableDinners";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchValue: string) => {
    navigate(`/search?query=${searchValue}`);
  };

  return (
    <div className="relative font-alata">
      <NavBar />

      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-3/6 bg-cover bg-center mb-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          zIndex: -1,
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-4xl mt-80 mb-10 text-center font-bold text-white text-primary drop-shadow-[0_3px_1.5px_rgba(0,0,0,.8)]">
          Unearth Local Flavors - Your Next Favorite Dish Awaits
        </h1>
        <SearchBar onSubmit={handleSearchSubmit}/>

        <section className="mt-96">
          <FeaturedLists />
          {/* recommended restaurants here */}
          <div className="mt-20">
            <QuickAndAffordableDinners />
          </div>
        </section>

        <footer className="mt-16 text-center p-4 bg-secondary-1 text-text-1 text-primary">
          © 2024 Local Finds. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
