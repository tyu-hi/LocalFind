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
   
<div className="flex w-full">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg  pt-2">
        <div className="flex flex-wrap mb-6 w-full">
          <h2 className="px-4 pt-3 pb-2 text-black font-medium text-xl">Review</h2>
          <div className="w-full md:w-full mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium font-alata placeholder-gray-700 focus:outline-none focus:bg-white"
              name="review"
              placeholder='Start your review here...'
              required
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className="w-full">
            <div className="flex items-center text-gray-700 px-2 mr-auto">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  onClick={() => setRating(index + 1)}
                  className={`w-5 text-gray-500 cursor-pointer ${
                    rating > index ? 'text-orange' : 'text-gray-300'
                  }`}
                  fill={rating > index ? 'currentColor' : 'none'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2l3.9 7.9 8.1 1.1-6 5.8 1.4 8.2-7.4-3.9-7.4 3.9 1.4-8.2-6-5.8 8.1-1.1z"></path>
                </svg>
              ))}
            </div>
            <div className="-mr-1 pt-2 px-3">
              <input
                type='submit'
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100 font-alata"
                value='Post'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
