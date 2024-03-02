import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FIREBASE_FIRESTORE } from "../firebase/firebase";

interface Review {
  userId: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  restaurantId: string;
}

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

const ReviewList: React.FC<ReviewListProps> = ({
  restaurantId,
}: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const unsubscribe = FIREBASE_FIRESTORE.collection("reviews")
      .where("restaurantId", "==", restaurantId)
      .onSnapshot((snapshot: any[]) => {
        const reviewsData: Review[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          reviewsData.push({
            userId: data.userId,
            rating: data.rating,
            comment: data.comment,
          });
        });
        setReviews(reviewsData);
      });
    return () => unsubscribe();
  }, [restaurantId]);

  return (
    <div>
      <h2>Reviews:</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold mb-1">
                Rating: {review.rating} / 5
              </h3>
              <span className="text-sm text-gray-500">By {review.userId}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewList;
