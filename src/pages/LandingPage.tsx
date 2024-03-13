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
    <div className="relative font-alata auto">
      <NavBar />

      {/* Background image */}
      <div
        className="absolute top-0 w-full h-2/5 bg-cover bg-center mb-10"
        style={{
          backgroundImage:
            'url(/hamburgerPerson.png)',
          zIndex: -1,
        }}
      ></div>

      <div className="relative z-10">
        <div className="mt-64">
          <h1 className="text-4xl mb-10 text-center font-bold text-white text-primary drop-shadow-[0_3px_1.5px_rgba(0,0,0,.8)]">
            Unearth Local Flavors, Your Next Favorite Dish Awaits
          </h1>

          <SearchBar onSubmit={handleSearchSubmit}/>
        </div>
        
        <div className="flex flex-row relative">
          <div className="text-md ml-24 text-orange mt-60 inline-block rounded-2xl px-4 bg-white border border-orange border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
            featured
          </div>  
          <div className="text-md ml-6 text-orange mt-60 inline-block rounded-2xl px-4 bg-white border border-orange border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
            recommended
          </div> 
          <div className="text-md ml-6 text-orange mt-60 inline-block rounded-2xl px-4 bg-white border border-orange border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
            high ratings
          </div> 
          <div className="text-md ml-6 text-orange mt-60 inline-block rounded-2xl px-4 bg-white border border-orange border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
            near me
          </div>
        </div>
        <section>
          <div className="mt-42">
            <FeaturedLists />
            {/* recommended restaurants here */}
            
          </div>
          <div className="mt-42">
            <RecommendedRestaurants />
            {/* recommended restaurants here */}
            
          </div>
          <div className="mt-20">
            <QuickAndAffordableDinners />
          </div>
          {/* <div className="mt-20">
            <RecommendedRestaurants />
          </div> */}
        </section>

        <footer className="mt-16 text-center p-4 bg-secondary-1 text-text-1 text-primary">
          © 2024 Local Finds. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;