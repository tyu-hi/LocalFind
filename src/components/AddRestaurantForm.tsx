import * as React from 'react';
import { useState } from 'react';
//firestore
import { FIREBASE_FIRESTORE, FIREBASE_AUTH, upload } from '../firebase/firebase';
import { addDoc, collection, query, where, getDocs} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from './NavBar';

//Need to connect data with restraunt uid?

const AddRestaurantForm: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const [foodStyle, setFoodStyle] = useState('');
  const [price, setPrice] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  //testign image
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  /////////////////////////////////////////////////

  //connct to user
  const [user] = useAuthState(FIREBASE_AUTH);

  //testing image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  //image from const[ image...]
  const uploadPhoto = async () => {
    if (!image) {
      console.error('No file selected');
      return;
    }
  
    const storageRef = ref(storage, 'restaurantImages/' + image.name);
  
    try {
      // Upload file to storage
      const snapshot = await uploadBytes(storageRef, image);
      console.log('Uploaded a blob or file!', snapshot);
  
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', downloadURL);
  
      // Save download URL to Firestore or use it as needed
      // ...
      setImageUrl(downloadURL);
    } catch (error) {
      console.error('Error uploading file:', error);
    }

  };
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => { //form element?
    e.preventDefault();
    /* FIRESTORE IMPLEMENTATION */
    //Connect restraunt to Firestore
    const firestore = FIREBASE_FIRESTORE;

    //add restraunt data to Firestore:
    const colRef = collection(firestore, 'Restaurants');
    try {
      if (user && user.uid) {

        const uploadPromise = uploadPhoto(); // Start uploading photo
        const downloadUrlPromise = uploadPromise.then(() => imageUrl);
        await Promise.all([uploadPromise, downloadUrlPromise]); // Wait for both promises to resolve

        if (!imageUrl) {
          throw new Error('Image URL is empty, or ignore cuz this is a bug'); //???
        }

      await addDoc(colRef, {
        userId: user?.uid,  //!!!!!!!!!!! this is the id of the user uploading it, we can say it's rsetraunt id as well
        restaurantName,
        address,
        city,
        zip,
        foodStyle,
        price,
        website,
        //imageURL,
        imageURL: imageUrl,
      });
      console.log('Restaurant added successfully!');
      // Display alert
      alert('Restaurant added successfully!');


      //reset form fields after submission
      setRestaurantName('');
      setAddress('');
      setCity('');
      setZip('');
      setFoodStyle('');
      setPrice('');
      setWebsite('');
      setImage(null);
      //setImageFile(null);
      setImageUrl('');
      
      
      }
      else {
        throw new Error('User or user ID is undefined'); //meaning, not logged in
      }
    } catch (error) {
      console.error('Error adding restraunt: ', error);
      alert("Error adding restraunt!");
    }

  };

  return (
    <div>
      <NavBar/>
      <div className="p-6 mt-10 font-alata mb-10">
          <div className="max-w-lg mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-navyblue">Add Business</h2>
          <form onSubmit={submitForm} className="space-y-6">
      
            {/*Restraunt Name*/}
            <div className="space-y-1 mt-10">
              <label htmlFor="name" className="block font-medium">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Restaurant Name"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
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
                className="w-full px-3 py-5 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className='space-y-1 '>
                <label htmlFor="city" className="block font-medium ">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor="zip" className="block font-medium ">Zip Code</label>
                  <input
                    id="zip"
                    type="text"
                    name="zip"
                    placeholder=""
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
              </div>
            </div>
            
            {/*Restraunt Description*/}
            <div className='space-y-3 font-bold text-2xl'>
              Business Description
            </div>

            {/*Restraunt Food Style*/}
            <div className="space-y-1">
              <label htmlFor="foodStyle" className="block font-medium">Food Style</label>
              <select
                id="foodStyle"
                name="foodStyle"
                value={foodStyle}
                onChange={(e) => setFoodStyle(e.target.value)}
                className="w-full px-2 py-2 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm
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
                className="w-full px-2 py-2 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm
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
              <label htmlFor="imageURL" className="block font-medium">Restaurant Picture</label>
              <input
                id="imageURL"
                type="file"
                name="imageURL"
                //value={imageUrl}
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-2 border-gray-800 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/*restraunt website*/}
            <div className="spaace-y-1">
              <label htmlFor="website" className="block font-medium">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  placeholder="Enter Website Link"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/*Submit Form*/}
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-10">
              Submit
            </button>
      
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurantForm;
