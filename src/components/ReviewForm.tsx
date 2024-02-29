import React, { useState } from "react";
//firestore
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from "../firebase/firebase";
import { FIREBASE_STORAGE } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";



interface ReviewFormProps {
  restaurantId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ restaurantId }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [user] = useAuthState(FIREBASE_AUTH);
  const firestore = FIREBASE_FIRESTORE;
  const reviewCollectionRef = collection(firestore, "reviews");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user.uid) {
      console.error("User not authenticated");
      return;
    }
    try {
      await addDoc(reviewCollectionRef, {
        userId: user.uid,
        restaurantId,
        rating,
        comment,
      });
      console.log("Review added successfully!");
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error adding review: ", error);
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
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
