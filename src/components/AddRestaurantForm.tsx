import * as React from 'react';
import { useState } from 'react';
//firestore
import { FIREBASE_FIRESTORE, FIREBASE_AUTH} from '../firebase/firebase';
import { addDoc, collection} from "firebase/firestore";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
  //const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  //Restraunt hours/////////////////////////////////////////
  //const [mondayHours, setMondayHours] = useState('');
  //const [tuesdayHours, setTuesdayHours] = useState('');
  //const [wednesdayHours, setWednesdayHours] = useState('');
  //const [thursdayHours, setThursdayHours] = useState('');
  //const [fridayHours, setFridayHours] = useState('');
  //const [saturdayHours, setSaturdayHours] = useState('');
  //const [sundayHours, setSundayHours] = useState('');
  
  //open - close times
  //omg this is so hideous
  const [mondayOpen, setMondayOpen] = useState('');
  const [mondayClose, setMondayClose] = useState('');
  const [tuesdayOpen, setTuesdayOpen] = useState('');
  const [tuesdayClose, setTuesdayClose] = useState('');
  const [wednesdayOpen, setWednesdayOpen] = useState('');
  const [wednesdayClose, setWednesdayClose] = useState('');
  const [thursdayOpen, setThursdayOpen] = useState('');
  const [thursdayClose, setThursdayClose] = useState('');
  const [fridayOpen, setFridayOpen] = useState('');
  const [fridayClose, setFridayClose] = useState('');
  const [saturdayOpen, setSaturdayOpen] = useState('');
  const [saturdayClose, setSaturdayClose] = useState('');
  const [sundayOpen, setSundayOpen] = useState('');
  const [sundayClose, setSundayClose] = useState('');

  /////////////////////////////////////////////////////////

  //connct to user
  const [user] = useAuthState(FIREBASE_AUTH);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => { //form element?
    e.preventDefault();

    /* FIRESTORE IMPLEMENTATION */
    //Connect restraunt to Firestore
    const firestore = FIREBASE_FIRESTORE;

    //add restraunt data to Firestore:
    const colRef = collection(firestore, 'restaurants');
    try {
      if (user && user.uid) {

        //const uploadPromise = uploadPhoto(); // Start uploading photo
        //const downloadUrlPromise = uploadPromise.then(() => imageUrl);
        //await Promise.all([uploadPromise, downloadUrlPromise]); // Wait for both promises to resolve

        //if (!imageUrl) {
        //  throw new Error('Image URL is empty, or ignore cuz this is a bug'); //???
        //}

      await addDoc(colRef, {
        userId: user?.uid,  //!!!!!!!!!!! this is the id of the user uploading it, we can say it's rsetraunt id as well
        restaurantName,
        address,
        city,
        zip,
        foodStyle,
        price,
        website,
        //imageUrl,
        phoneNumber,
        imageURL: imageUrl,
        //Restraunt Hours/
        mondayOpen,
        mondayClose,
        tuesdayOpen,
        tuesdayClose,
        wednesdayOpen,
        wednesdayClose,
        thursdayOpen,
        thursdayClose,
        fridayOpen,
        fridayClose,
        saturdayOpen,
        saturdayClose,
        sundayOpen,
        sundayClose,
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
      //setImage(null);
      //setImageFile(null);
      setImageUrl('');
      setPhoneNumber('');
      
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
                className="w-full px-3 py-6 bg-white border border-gray-800 border-2 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
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
              <label htmlFor="imageUrl" className="block font-medium">Restaurant Picture</label>
              <input
                id="imageUrl"
                type="text"
                name="imageUrl"
                //value={imageUrl}
                //onChange={handleImageChange}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder='Enter an Image Address'
                className="w-full px-3 py-2 bg-white border border-2 border-gray-800 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
              />
            </div>


            {/*restraunt hours*/ }
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1"> 
                <div className='text-lg'>
                Hours
                </div>
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="mondayHours" className="block font-medium mr-10">Monday</label>
                  <input
                    id="mondayOpen"
                    type="text"
                    name="mondayOpen"
                    placeholder="Open"
                    value={mondayOpen}
                    onChange={(e) => setMondayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="mondayClose"
                    type="text"
                    name="mondayClose"
                    placeholder="Close"
                    value={mondayClose}
                    onChange={(e) => setMondayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>

                {/*tuesday*/}
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="tuesdayHours" className="block font-medium mr-10">Tuesday</label>
                  <input
                    id="tuesdayOpen"
                    type="text"
                    name="tuesdayOpen"
                    placeholder="Open"
                    value={tuesdayOpen}
                    onChange={(e) => setTuesdayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="tuesdayClose"
                    type="text"
                    name="tuesdayClose"
                    placeholder="Close"
                    value={tuesdayClose}
                    onChange={(e) => setTuesdayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>

                {/*wednesday*/}
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="wednesdayHours" className="block font-medium mr-4">Wednesday</label>
                  <input
                    id="wednesdayOpen"
                    type="text"
                    name="wednesdayOpen"
                    placeholder="Open"
                    value={wednesdayOpen}
                    onChange={(e) => setWednesdayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="wednesdayClose"
                    type="text"
                    name="wednesdayClose"
                    placeholder="Close"
                    value={wednesdayClose}
                    onChange={(e) => setWednesdayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>

                {/*thursday*/}
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="thursdayHours" className="block font-medium mr-7">Thursday</label>
                  <input
                    id="thursdayOpen"
                    type="text"
                    name="thursdayOpen"
                    placeholder="Open"
                    value={thursdayOpen}
                    onChange={(e) => setThursdayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-4 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="thursdayClose"
                    type="text"
                    name="thursdayClose"
                    placeholder="Close"
                    value={thursdayClose}
                    onChange={(e) => setThursdayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>


                {/*friday*/}
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="fridayHours" className="block font-medium mr-10">Friday</label>
                  <input
                    id="fridayOpen"
                    type="text"
                    name="fridayOpen"
                    placeholder="Open"
                    value={fridayOpen}
                    onChange={(e) => setFridayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-7 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="fridayClose"
                    type="text"
                    name="fridayClose"
                    placeholder="Close"
                    value={fridayClose}
                    onChange={(e) => setFridayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>

                {/*saturday*/}
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="saturdayHours" className="block font-medium mr-8">Saturday</label>
                  <input
                    id="saturdayOpen"
                    type="text"
                    name="saturdayOpen"
                    placeholder="Open"
                    value={saturdayOpen}
                    onChange={(e) => setSaturdayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="saturdayClose"
                    type="text"
                    name="saturdayClose"
                    placeholder="Close"
                    value={saturdayClose}
                    onChange={(e) => setSaturdayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>

                {/*sunday*/}
                <div className="flex items-center">
                  <div></div>
                  <label htmlFor="sundayHours" className="block font-medium mr-11">Sunday</label>
                  <input
                    id="sundayOpen"
                    type="text"
                    name="sundayOpen"
                    placeholder="Open"
                    value={sundayOpen}
                    onChange={(e) => setSundayOpen(e.target.value)}
                    className="w-20 px-3 py-2 mr-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='p-2'>
                    AM
                  </div>
                  <span className='p-2'>-</span>
                  <input
                    id="sundayClose"
                    type="text"
                    name="sundayClose"
                    placeholder="Close"
                    value={sundayClose}
                    onChange={(e) => setSundayClose(e.target.value)}
                    className="w-20 px-3 py-2 ml-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className='ml-1 p-2'>
                    PM
                  </div>
                </div>

              </div>
            </div>

            {/*Restraunt Phone*/}
            <div className="space-y-1">
              <label htmlFor="phoneNumber" className="block font-medium">Phone Number</label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                //value={imageUrl}
                //onChange={handleImageChange}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter a Phone Number'
                className="w-full px-3 py-2 bg-white border border-2 border-gray-800 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
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
            <div className='flex justify-center'>
              <button type="submit" className="w-44 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md mt-10">
                Submit
              </button>
            </div>
      
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurantForm;
