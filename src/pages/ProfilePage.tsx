import NavBar from "../components/NavBar"

//import { DefaultProfile } from "../svg-icons.tsx/DefaultProfile"
import { useAuth, upload } from "../firebase/firebase";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../firebase/firebase";
import { doc, collection, getDocs, query, where, setDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Playlists from "../components/Playlists";
//After use is logged in, I would like for the signup/sign in to disappear, 
//and be replaced by the icon of the user

const ProfilePage = () => {

  const navigate = useNavigate();
  //USE THIS FOR ALL FIRESBASE USER STUFF
  const currentUser = useAuth();

  /* HANDLE UPLOADING PROFILE IMAGE */
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("/Default_pfp.svg.png");
  //https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2c%2FDefault_pfp.svg%2F1200px-Default_pfp.svg.png&tbnid=t5PQpQ66IW5J4M&vet=12ahUKEwjApLK059GEAxWiJEQIHXLqB84QMygAegQIARBy..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&docid=o_Ii_cyIO_p3fM&w=1200&h=1200&q=default%20profile%20picture%20&ved=2ahUKEwjApLK059GEAxWiJEQIHXLqB84QMygAegQIARBy
  
  //Allow user to edit bio//////////////////////////////////////
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioText, setBioText] = useState("");

  /* HANDLE UPLOADING FIRST AND LAST NAME*/
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const firestore = FIREBASE_FIRESTORE;
  const colRef = collection(firestore, "Users");
  
  // Function to toggle edit 
  const toggleEditMode = () => {
    setIsEditingBio(!isEditingBio);
  };
  const updateBio = async (newBioText: string) => {
    if (currentUser) {
      const userDocRef = doc(colRef, currentUser.uid); // Reference to the user's document
      try {
        await setDoc(userDocRef, { bioText: newBioText }, { merge: true }); // Update the bioText field
        console.log('Bio updated successfully!');
      } catch (error) {
        console.error("Error updating bio text:", error);
      }
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateBio(bioText);
      setIsEditingBio(false); // Exit edit mode
    }
  };


  //Handle image change////////////////////////
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      
      // Upload the file to Firestore
      if (currentUser && file) {
        upload(file, currentUser, setLoading).then((url) => {
          // Update the photoURL state with the URL of the uploaded image
          if (typeof url === 'string') {
            setPhotoURL(url);
          } else {
            console.error('Error uploading image:', url);
          }
        }).catch((error) => {
          console.error('Error uploading image:', error);
        });
      }
    }
  };
  //image change
  const handleClick = () => {
    if (currentUser) {  
      if (photo)
      {
        console.log('at handleclick');
        upload(photo, currentUser, setLoading);
        alert('Profile image changed!');
      }
    }
   
  };

  //get user data and update name and profile image
  useEffect(() => {
    if (currentUser) {
      const queryRef = query(colRef, where("uid", "==", currentUser.uid));
      getDocs(queryRef)
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              setFirstName(data.firstname);
              setLastName(data.lastname);
              setLocation(data.location);
              setPhotoURL(data.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png');
              setBioText(data.bioText);
            });
          }
        })
        .catch((error) => {
          console.error("Error querying Firestore:", error);
        });
    }
  }, [currentUser]);
  
  /*HANDLE LOGOUT*/
  const handleLogOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      console.log('User signed out successfully');
      alert('Logout successful!')
      navigate("/"); //navigate back to home page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };


  //add bio


  
  return (
    <div className="font-alata">
        <NavBar/>
        {/* if user is logged in show this profile page, if not tell user to log in | conditional rendering*/}
        <div className="max-w-2xl mx-auto width-full">
          
          <div className="flex flex-col items-center justfiy-center mb-10 mt-10 w-full">
            {/*top*/}
            <div className="flex flex-row ">
              {/*change profile pic to passable {variable} later */}
              <div className="w-100 h-100 sm:w-100 sm:h-100 relative group">
                
                {/*allow user to change profile pic*/}
                {/* Input element for file selection */}
                <input
                  type="file"
                  onChange={handleChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  style={{ width: '100%', height: '100%' }}
                />
                
                {/* Profile picture */}
                <img src={currentUser?.photoURL ?? '/Default_pfp.svg.png'} 
                  alt="Profile" 
                  className="avatar" 
                  title="Profile" //tooltip
							/>
                
                {/* Change Image button */}
                <button
                  disabled={loading || !photo}
                  onClick={handleClick}
                  className="absolute bottom-14 left-0 right-0 mx-auto bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium rounded-xl cursor-pointer p-2"
                  style={{ width: 'fit-content' }}
                >
                  Change Image
                </button>
                
              </div>
              {/*profile details*/}
              <div className="ml-10 mt-3">

                {/*user name*/}
                <h2 className = "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black-900">
                  {firstname} {lastname}
                  </h2>

                {/*change location to passable {variable} later */}
                <p className="text-lightblue text-lg mt-2 mb-3">{location} </p>
                {/*change Bio/Stats to passable {variable} later */}
                {isEditingBio ? (
                  <input
                    id="bioText"
                    type="text"
                    className="border border-gray-300 text-sm px-2 bg-white rounded-md p-2 mt-2 mb-2"
                    value={bioText}
                    placeholder="Tell us about yourself!"
                    onChange={(e) => setBioText(e.target.value)}
                    onKeyDown={handleKeyDown} // Call handleKeyDown when a key is pressed
                  />
                ) : (
                  <p className="text-gray-500 text-sm mt-2">{bioText}</p>
                )}
              <div className="flex flex-row text-gray-500 text-sm">
                {!isEditingBio ? ("Tell us about yourself") : ("")}
                <CiEdit className="ml-2 hover:cursor-pointer" onClick={toggleEditMode} />
                </div>
                <p className="text-sm mb-2 text-orange mt-7 ">playlists | reviews </p>
                
              </div>
            </div>
             
            {/*bottom*/}
            
             {/*Playlists*/}
             <div className="flex-row mt-10 text-lg ">
              Your Playlists
              
              <div >
                <Playlists/>

              </div>
            </div>
            

            {/*reviews*/}
            
          </div>

          {/*log out user*/}
          <div className="flex justify-center">
            <button
              onClick={handleLogOut}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-lg mb-20 mt-10"
            >
              Logout
            </button>
          </div>
        </div>


        

        
    </div>

  )
}

export default ProfilePage