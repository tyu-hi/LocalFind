//import * as React from 'react';
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/NavBar";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { FIREBASE_AUTH } from "../firebase/firebase";

const settings = {
  focusOnSelect: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface StoreHours {
  openTime: string; // in format "HH:mm"
  closeTime: string; // in format "HH:mm"
}

interface RestaurantData {
  name: string;
  image: string;
  mapApi: string;
  address: string;
  info: string;
  menuLink: string;
  isOpen: boolean;
  closingTime: string;
  rating: number;
  numberOfRatings: number;
  distance: number;
  priceScale: string;
  cuisineType: string;
  storeHours: StoreHours;
}

// Function to check if the current time is within the store hours
const isStoreOpen = (storeHours: StoreHours): boolean => {
  const currentTime = new Date();
  const openTime = new Date();
  const closeTime = new Date();

  const [openHours, openMinutes] = storeHours.openTime.split(":").map(Number);
  const [closeHours, closeMinutes] = storeHours.closeTime
    .split(":")
    .map(Number);

  openTime.setHours(openHours, openMinutes);
  closeTime.setHours(closeHours, closeMinutes);

  return currentTime >= openTime && currentTime <= closeTime;
};

function RestaurantView() {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantData>({
    name: "Default Restaurant Name",
    image: "default-image-url", // Replace with your default image URL
    mapApi: "default-map-api", // Replace with your default map API key or URL
    address: "123 Default Address",
    info: "This is a default restaurant description.",
    menuLink: "default-menu-link", // Replace with your default menu link
    isOpen: false, // Default open status - would normally be computed
    closingTime: "22:00", // Default closing time
    rating: 0, // Default rating
    numberOfRatings: 0, // Default number of ratings
    distance: 0, // Default distance
    priceScale: "$$", // Default price scale
    cuisineType: "Default Cuisine Type", // Default cuisine type
    storeHours: {
      // Default store hours
      openTime: "09:00", // Default opening time
      closeTime: "22:00", // Default closing time
    },
  });

  const isOpen = isStoreOpen(restaurantInfo.storeHours);

  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  useEffect(() => {
    const restaurantData: RestaurantData = {
      name: "Restaurant Name",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-660714144-1516227341.jpg",
      mapApi: "Map API URL or Key",
      address: "1234 Culinary Blvd, Foodtown, TX",
      info: "This is a placeholder description for the restaurant. It offers a variety of dishes with a focus on farm-to-table fresh ingredients.",
      menuLink: "http://example-restaurant-menu-link.com",
      isOpen: true, // This would be dynamically calculated based on current time and store hours
      closingTime: "22:00", // This would be part of the storeHours
      rating: 4.5,
      numberOfRatings: 350,
      distance: 5.2,
      priceScale: "$$$",
      cuisineType: "Italian",
      storeHours: {
        openTime: "11:00", // Example opening time
        closeTime: "22:00", // Example closing time
      },
    };

    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      setUserLoggedIn(!!user); // Set to true if user is not null, false otherwise
    });

    setRestaurantInfo(restaurantData);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 border-black pb-10">
          <div className="text-black px-2 py-2  mb-4 ">
            <div className="text-4xl font-serif rounded-lg">
              {restaurantInfo.name}
            </div>
            <p className="text-gray-600 pl-2">
              {restaurantInfo.cuisineType} · {restaurantInfo.priceScale}
            </p>
          </div>
          <div className="mb-2"></div>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-8">
            <div className="w-full md:w-2/2">
              <h1 className="mb-4 text-black px-4 text-xl font-medium">
                Description
              </h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                <p className="text-gray-800">{restaurantInfo.info}</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <h1 className="mb-4 text-black px-4 text-xl font-medium">Info</h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                <div className="flex flex-col">
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Map API</h2>
                    <div className="text-gray-300">{restaurantInfo.mapApi}</div>
                  </div>
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Hours</h2>
                    <div>
                        {isOpen ? (
                          <span className="text-green-600">
                            Open now · Closes at{" "}
                            {restaurantInfo.storeHours.closeTime}
                          </span>
                        ) : (
                          <span className="text-red-600">
                            Closed · Opens at{" "}
                            {restaurantInfo.storeHours.openTime}
                          </span>
                        )}
                      </div>
                  </div>
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Menu</h2>
                    <div className="text-gray-300">
                      {restaurantInfo.menuLink}
                    </div>
                    
                  </div>
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Address</h2>
                    <div className="text-gray-300">
                      {restaurantInfo.address}
                    </div>
                  </div>
                  <button className="p-4 transition duration-300 bg-gray-900 hover:bg-blue-400 rounded-lg">
                    <h2 className="text-white">Contact</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <h1 className="mb-4 text-black px-4 text-xl font-medium">
              Reviews
            </h1>
            <div className="bg-gray-100 p-4 rounded-lg"></div>
          </div>
          {/* <div className="flex flex-col">
        {userLoggedIn && <ReviewForm restaurantId={restaurantId} />}
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default RestaurantView;
function setUserLoggedIn(arg0: boolean) {
  throw new Error("Function not implemented.");
}
