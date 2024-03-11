//import * as React from 'react';
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/NavBar";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_FIRESTORE,
} from "../firebase/firebase";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

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

interface restaurantInfo {
  address: string;
  city: string;
  foodStyle: string;
  imageURL: string;
  price: string;
  restaurantName: string;
  userId: string;
  website: string;
  zip: string;
  mondayOpen: string;
  mondayClose: string;
  tuesdayOpen: string;
  tuesdayClose: string;
  wednesdayOpen: string;
  wednesdayClose: string;
  thursdayOpen: string;
  thursdayClose: string;
  fridayOpen: string;
  fridayClose: string;
  saturdayOpen: string;
  saturdayClose: string;
  sundayOpen: string;
  sundayClose: string;
  phoneNumber: string;
}


function RestaurantView() {
  const { id } = useParams<{ id?: string }>();
  const [restaurantInfo, setRestaurant] = useState<restaurantInfo | null>(null);

  useEffect(() => {
    const fetchRestaurantData = async (restaurantId: string) => {
      const db = FIREBASE_FIRESTORE;
      const restaurantRef = doc(db, "Restaurants", restaurantId);

      try {
        const docSnapshot = await getDoc(restaurantRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as restaurantInfo;
          setRestaurant(data);
        } else {
          console.log("No such restaurant exists!");
        }
      } catch (error) {
        console.error("Error fetching restaurant data: ", error);
      }
    };

    if (id) {
      fetchRestaurantData(id);
    }
  }, [id]);

  if (!restaurantInfo) {
    return <div>Loading restaurant information...</div>;
  }
  
    // Rest of your component remains the same
  

  // Render your component based on the state of `restaurantInfo`
  
  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];
  

  return (
    <div className="font-alata">
      <NavBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 border-black pb-10">
          <div className="text-black px-2 py-2  mb-4 ">
            <div className="text-4xl font-serif rounded-lg mt-10">
              {restaurantInfo.restaurantName}
            </div>
            <p className="text-gray-600 pl-2">
              {restaurantInfo.foodStyle} · {restaurantInfo.price}
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
              <h1 className="mb-4 text-black px-4 text-xl font-medium">Tags</h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                
                  <div className="text-md ml-24 text-white inline-block rounded-2xl px-4 bg-blue-900 border border-white border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
                    featured
                  </div>
                  <div className="text-md ml-6 text-white mt-60 inline-block rounded-2xl px-4 bg-blue-900 border border-white border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
                    recommended
                  </div>
                  <div className="text-md ml-6 text-white mt-60 inline-block rounded-2xl px-4 bg-blue-900 border border-white border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
                    high ratings
                  </div>
                  <div className="text-md ml-6 text-white mt-60 inline-block rounded-2xl px-4 bg-blue-900 border border-white border-2 drop-shadow-[0_3px_1px_rgba(0,0,0,.3)] hover:cursor-pointer">
                    near me
                  </div>
                
              </div>

              <h1 className="mb-4 text-black px-4 text-xl font-medium">Menu</h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                <img
                  src={restaurantInfo.imageURL}
                  alt={`${restaurantInfo.restaurantName} menu`}
                ></img>
              </div>

              <ReviewForm />

              {/* <div className="new-section bg-gray-100 p-4 mb-6 rounded-lg">
                {/* <div className="flex flex-col">
        {userLoggedIn && <ReviewForm restaurantId={restaurantId} />}
      </div> */}
              {/* </div>  */}

              <h1 className="mb-4 text-black px-4 text-xl font-medium">
                Reviews
              </h1>
              <div className="new-section bg-gray-100 p-4 mb-6 rounded-lg">
                <ReviewList />
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="max-w-sm mx-auto bg-white rounded-lg border-2 border-black">
                <div className="p-5">
                  <div className="text-center mb-4 border-b-2 border-black pb-4">
                    <p className="text-xl font-bold font-alata">805-665-7012</p>
                  </div>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day, index, array) => (
                    <div
                      key={day}
                      className={`flex justify-between ${
                        index !== array.length - 1 && "border-b-2 border-black"
                      } py-2`}
                    >
                      <span className="font-medium font-alata">{day}</span>
                      <span className="text-gray-600 font-alata">
                        7:00 AM - 9:00 PM
                      </span>
                    </div>
                  ))}
                  <div className="text-center border-t-2 border-black pt-4">
                    <p className="text-sm font-alata">
                      {restaurantInfo.address}
                    </p>
                    <p className="text-sm font-alata">
                      {restaurantInfo.city}
                    </p>
                    <p className="text-sm font-alata">
                      {restaurantInfo.zip}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    {restaurantInfo && (
                      <a
                        href={restaurantInfo.website}
                        className="text-blue-500 font-alata hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {restaurantInfo.website}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantView;
function setUserLoggedIn(arg0: boolean) {
  throw new Error("Function not implemented.");
}
