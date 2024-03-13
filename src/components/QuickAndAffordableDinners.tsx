import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles

// Define TypeScript interfaces for props
interface CardProps {
  title: string;
  rating: string;
  imageUrl: string;
}

interface CardsContainerProps {
  cardsData: CardProps[];
}

// Card Component
const Card: React.FC<CardProps> = ({ title, rating, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center my-2">
          <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mr-2">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

// Cards Container Component
const CardsContainer: React.FC<CardsContainerProps> = ({ cardsData }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {cardsData.map((card, index) => (
        <SwiperSlide key={index}>
          <Card {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Sample data for the cards, now typed with the CardProps interface
const cardsData: CardProps[] = [
  {
    title: "The Taco Shop Mexican Kitchen",
    rating: "4.9",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVkxK6sfONhuk7f6FD1UNYGiTw6h8ooYo6Q&usqp=CAU",
  },
  {
    title: "The Taco Shop Mexican Kitchen",
    rating: "4.9",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVkxK6sfONhuk7f6FD1UNYGiTw6h8ooYo6Q&usqp=CAU",
  },
  {
    title: "Seed Ranger - The Great Vegan Food Spot",
    rating: "4.7",
    imageUrl:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1200", // Replace with actual image path
  },
  {
    title: "The Taco Shop Mexican Kitchen",
    rating: "4.9",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVkxK6sfONhuk7f6FD1UNYGiTw6h8ooYo6Q&usqp=CAU",
  },
  {
    title: "The Taco Shop Mexican Kitchen",
    rating: "4.9",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVkxK6sfONhuk7f6FD1UNYGiTw6h8ooYo6Q&usqp=CAU",
  },
  // ... add as many objects as needed
];

// App Component
const QuickAndAffordableDinners: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-8">
        Quick And Affordable Dinners
      </h1>
      <CardsContainer cardsData={cardsData} />
    </div>
  );
};

export default QuickAndAffordableDinners;
