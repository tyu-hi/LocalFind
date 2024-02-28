import React, { useState, useEffect } from 'react';
import { FIREBASE_FIRESTORE } from '../firebase/firebase';

interface Review {
  userId: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  restaurantId: string;
}

const ReviewList: React.FC<ReviewListProps> = ({ restaurantId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const unsubscribe = FIREBASE_FIRESTORE.collection('reviews')
      .where('restaurantId', '==', restaurantId)
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
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>User ID: {review.userId}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
