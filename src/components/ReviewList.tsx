import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import FIREBASE_FIRESTORE from './firebaseConfig'; // Uncomment this when integrating with Firebase

interface Review {
  userId: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  restaurantId: string;
}

const userNames: { [key: string]: string } = {
  user1: "Alice",
  user2: "Bob",
  user3: "Charlie",
  user4: "Diana",
};

const getUserName = (userId: string): string => {
  return userNames[userId] || "Anonymous";
};

const ReviewList: React.FC<ReviewListProps> = ({ restaurantId }) => {
  const perPage = 2; // Define how many reviews you want per page
  const [currentPage, setCurrentPage] = useState(0);

  const [reviews, setReviews] = useState<Review[]>([
    {
      userId: "user1",
      rating: 5,
      comment: "Fantastic experience, highly recommended!",
    },
    { userId: "user2", rating: 4, comment: "Great food, will come again." },
    { userId: "user3", rating: 3, comment: "Good, but room for improvement." },
    { userId: "user4", rating: 2, comment: "Below average, expected more." },
  ]);

  // Calculate the total number of pages
  const pageCount = Math.ceil(reviews.length / perPage);

  // Get the reviews for the current page
  const paginatedReviews = reviews.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-orange" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  // Generate the pagination dots
  const renderPaginationDots = () => {
    return [...Array(pageCount)].map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`h-2 w-2 rounded-full mx-1 ${
          currentPage === i ? "bg-blue-500" : "bg-gray-300"
        }`}
        aria-label={`Go to page ${i + 1}`}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      {paginatedReviews.map((review, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-4 w-full"
        >
          <div className="flex items-center mb-4">
            <div>
              <div className="text-lg font-alata font-semibold">
                {getUserName(review.userId)}
              </div>
              {/* Optional: Add a date here if you have it in your data */}
            </div>
          </div>
          <div className="flex items-center mb-4">
            {renderStars(review.rating)}
          </div>
          <p className="text-gray-700 font-alata">{review.comment}</p>
        </div>
      ))}
      <div className="flex justify-center p-4">{renderPaginationDots()}</div>
    </div>
  );
};

export default ReviewList;
