import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from "../firebase/firebase";
import { collection } from "firebase/firestore";

interface ReviewFormProps {
  restaurantId: string;
}

const firestore = FIREBASE_FIRESTORE;

const ReviewForm: React.FC<ReviewFormProps> = ({
  restaurantId,
}: ReviewFormProps) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // const userId = FIREBASE_AUTH.currentUser?.uid; // Get logged-in user's ID
    // if (!userId) {
    //   console.error("User not authenticated");
    //   return;
    // }
    // try {
    //   // Add the review to Firestore
    //   await firestore.collection("reviews").add({
    //     userId: userId,
    //     restaurantId: restaurantId,
    //     rating: rating,
    //     comment: comment,
    //   });
    //   // Reset form fields
    //   setRating(0);
    //   setComment("");
    //   console.log("Review submitted successfully");
    // } catch (error) {
    //   console.error("Error submitting review:", error);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rating">Rating:</label>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(_, newRating) => {
            setRating(newRating || 0); // If newRating is null (when clicking the same value to clear the rating), default to 0
          }}
        />
      </div>
      <div>
        <h2>Comment:</h2>
        <textarea
          className="bg-gray-400"
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />
      </div>
      <button className="bg-blue-400 text-white rounded-lg"type="submit">Submit </button>
    </form>
  );
};

export default ReviewForm;
