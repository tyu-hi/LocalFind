import React, { useState } from 'react';
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from '../firebase/firebase';

interface ReviewFormProps {
  restaurantId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ restaurantId }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = FIREBASE_AUTH.currentUser?.uid; // Get logged-in user's ID
    if (!userId) {
      console.error('User not authenticated');
      return;
    }
    try {
      // Add the review to Firestore
      await FIREBASE_FIRESTORE.collection('reviews').add({
        userId: userId,
        restaurantId: restaurantId,
        rating: rating,
        comment: comment,
      });
      // Reset form fields
      setRating(0);
      setComment('');
      console.log('Review submitted successfully');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={handleRatingChange}
          min={0}
          max={5}
          step={1}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
