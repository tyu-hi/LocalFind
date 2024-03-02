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

interface MenuData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface RestaurantData {
  name: string;
  image: string;
  mapApi: string;
  address: string;
  info: string;
  MenuLink: string;
}

function RestaurantView() {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantData>({
    name: "",
    image: "",
    mapApi: "",
    address: "",
    info: "",
    MenuLink: "",
  });
  const [menuItems, setMenuItems] = useState<MenuData[]>([]);

  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3860097/pexels-photo-3860097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3860097/pexels-photo-3860097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  useEffect(() => {
    const restaurantData: RestaurantData = {
      name: "Restaurant Name",
      MenuLink: "link",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-660714144-1516227341.jpg",
      mapApi: "Map API",
      address: "Restaurant Address",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec hendrerit, odio vitae ultricies consequat, odio tortor placerat libero, nec sodales justo elit sed dolor. In non purus vitae mauris dapibus mattis. Duis rutrum magna a erat suscipit, at ultrices libero luctus. Sed sed dolor vitae quam lobortis dictum. Curabitur non justo nec nisi vehicula posuere. Nam suscipit quam at convallis consequat. Integer consectetur nisi nec eros eleifend bibendum. Duis vel sapien quis mauris lobortis feugiat. Maecenas ac libero eget orci bibendum vehicula nec sed enim. Integer viverra nisi ut magna condimentum, sed ultricies felis posuere. Nam ullamcorper felis sit amet leo interdum, quis molestie ligula luctus. Aliquam tincidunt neque a nunc iaculis, eu dictum dolor tincidunt. Nulla nec quam eu odio consectetur hendrerit. Proin ut metus in magna gravida posuere",
    };
    const menuData: MenuData[] = [
      {
        id: 1,
        title: "Item 1",
        description: "Description for Item 1",
        imageUrl:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 2,
        title: "Item 2",
        description: "Description for Item 2",
        imageUrl:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 3,
        title: "Item 3",
        description: "Description for Item 3",
        imageUrl:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 4,
        title: "Item 4",
        description: "Description for Item 4",
        imageUrl:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      // Add more items as needed
    ];

    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      setUserLoggedIn(!!user); // Set to true if user is not null, false otherwise
    });

    setRestaurantInfo(restaurantData);
    setMenuItems(menuData);
  }, []);

  return (
    <div>
    <NavBar />
    <div className="container mx-auto">
      <div className="grid grid-cols-1 border-black">
        <div className="text-black px-2 py-2 rounded-lg mb-4 text-4xl font-serif">
          {restaurantInfo.name}
        </div>
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
              <h1 className="mb-4 text-black px-4 text-xl font-medium">
                Info
              </h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                <div className="flex flex-col">
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Map API</h2>
                    <div className="text-gray-300">
                      {restaurantInfo.mapApi}
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Menu</h2>
                    <div className="text-gray-300">
                      {restaurantInfo.MenuLink}
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
