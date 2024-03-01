import { Form, Button } from 'react-bootstrap'; // Example using Reactstrap forms
import * as React from 'react';
import { useState } from 'react';
//firestore
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from '../firebase/firebase';
import { FIREBASE_STORAGE } from '../firebase/firebase';
import { addDoc, collection} from "firebase/firestore"
import { ref, uploadString, getDownloadURL} from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from './NavBar';

//Need to connect data with User's UID!!!!

const AddRestaurantForm: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const [foodStyle, setFoodStyle] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  //connct to user
  const [user] = useAuthState(FIREBASE_AUTH);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => { //form element?
    e.preventDefault();

    
    /*
    //Inman's:
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    // Handle the payload as needed (e.g., send it to a server)
    console.log(payload) //we will change what we do with this object later.
    */
    

    /* FIRESTORE IMPLEMENTATION */
    //Connect restraunt to Firestore
    const firestore = FIREBASE_FIRESTORE;


    //upluad image to Firebase Storage:
    let imageURL = '';
    if (imageFile) {
      //images/ folder created in Firebase Storage
      const imageRef = ref(FIREBASE_STORAGE, `images/${imageFile.name}`);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string;
        await uploadString(imageRef, dataUrl, 'data_url');
        imageURL = await getDownloadURL(imageRef);
  };
  reader.readAsDataURL(imageFile);
    }

    //add restraunt data to Firestore:
    const colRef = collection(firestore, 'restaurants');
    try {
      if (user && user.uid) {

      
      await addDoc(colRef, {
        userId: user?.uid,
        restaurantName,
        address,
        foodStyle,
        price,
        imageURL,
      });
      console.log('Restaurant added successfully!');

      //reset form fields after submission
      setRestaurantName('');
      setAddress('');
      setFoodStyle('');
      setPrice('');
      setImageFile(null);
      }
      else {
        throw new Error('User or user ID is undefined'); //meaning, not logged in
      }
    } catch (error) {
      console.error('Error adding restraunt: ', error);
    }

  };

  return (
    <div>
      <NavBar/>
      <div className="p-6 mt-10">
          <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6">Add a Restaurant</h2>
          <form onSubmit={submitForm} className="space-y-6">
      
            {/*Restraunt Name*/}
            <div className="space-y-1">
              <label htmlFor="name" className="block font-medium">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Restaurant Name"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
      
            {/*Restraunt Address*/} 
            <div className="space-y-1">
              <label htmlFor="address" className="block font-medium">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
      
            {/*Restraunt Food Style*/}
            <div className="space-y-1">
              <label htmlFor="foodStyle" className="block font-medium">Food Style</label>
              <select
                id="foodStyle"
                name="foodStyle"
                value={foodStyle}
                onChange={(e) => setFoodStyle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                text-gray-400"
              >
                <option value="">Select Food Style</option>
                <option value="American">American</option>
                <option value="Korean">Korean</option>
                <option value="Chinese">Chinese</option>
                <option value="Thai">Thai</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Medeterranian">Medeterranian</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Japanese">Japanese</option>
              </select>
            </div>
            
            {/*Restraunt Pricing*/}
            <div className="space-y-1">
              <label htmlFor="price" className="block font-medium">Price Range</label>
              <select
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                text-gray-400"
              >
                <option value="">Select Price Range</option>
                <option value="$10-20">$10-20</option>
                <option value="$20-50">$20-50</option>
                <option value="50+">$50+</option>
              </select>
            </div>

            {/*Restraunt Picture*/}
            <div className="space-y-1">
              <label htmlFor="restaurantPicture" className="block font-medium">Restaurant Picture</label>
              <input
                id="restaurantPicture"
                type="file"
                name="restaurantPicture"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0];
                  if (file)
                  {
                    setImageFile(file);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            {/*Submit Form*/}
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md">
              Submit
            </button>
      
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurantForm;
