import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
}

function RestaurantView() {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantData>({
    name: "",
    image: "",
    mapApi: "",
    address: "",
    info: "",
  });
  const [menuItems, setMenuItems] = useState<MenuData[]>([]);

  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3860097/pexels-photo-3860097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3860097/pexels-photo-3860097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];
  

  useEffect(() => {
    // Fetch restaurant information from your database
    // Example: fetch('/api/restaurant').then(response => response.json()).then(data => setRestaurantInfo(data));
    // Fetch menu items from your database
    // Example: fetch('/api/menu').then(response => response.json()).then(data => setMenuItems(data));
    // Replace the above lines with the actual fetching logic from your database
    // For demonstration purpose, let's assume you have static data
    const restaurantData: RestaurantData = {
      name: "Restaurant Name",
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
    setRestaurantInfo(restaurantData);
    setMenuItems(menuData);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8">
        <div className="relative">
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
          <div className="text-white px-2 py-2 rounded-lg mb-4 text-4xl font-extrabold ">
            {restaurantInfo.name}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-8">
            <div className="w-full md:w-2/2">
              <h1 className="mb-4 text-white px-4 text-xl font-medium">Description</h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                <p className="text-gray-800">{restaurantInfo.info}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <h1 className="mb-4 text-white px-4 text-xl font-medium">Map Component</h1>
              <div className="bg-gray-100 p-4 mb-6 rounded-lg">
                <div className="flex flex-col">
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Map API</h2>
                    <div className="text-gray-300">{restaurantInfo.mapApi}</div>
                  </div>
                  <div className="bg-gray-900 p-4 mb-6 rounded-lg">
                    <h2 className="text-white">Address</h2>
                    <div className="text-gray-300">
                      {restaurantInfo.address}
                    </div>
                  </div>
                  <button className="p-4 transition duration-300 bg-blue-500 hover:bg-blue-400 rounded-lg">
                      <h2 className="text-white">Reserve</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="mb-4 text-white px-4 text-xl font-medium">Menu</h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="slider">
            <Slider {...settings}>
              {menuItems.map((menuItem) => (
                <div key={menuItem.id} className="p-4">
                  <img
                    src={menuItem.imageUrl}
                    alt={menuItem.title}
                    className="w-full h-64 object-cover rounded"
                  />
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {menuItem.title}
                    </h3>
                    <p className="text-gray-900">{menuItem.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="flex flex-col">
          <h1 className="mb-4 text-white px-4 text-xl font-medium">Reviews</h1>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Reviews content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantView;
