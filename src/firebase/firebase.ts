// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, User, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqk8oWo5F9vH2oGNdWfPU45Q9yJvhoAoA",
  authDomain: "local-find-cl.firebaseapp.com",
  projectId: "local-find-cl",
  storageBucket: "local-find-cl.appspot.com",
  messagingSenderId: "964293185835",
  appId: "1:964293185835:web:5589521b5b78a3e290f56e",
  measurementId: "G-BYSPX3PY49"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);

// Initialize Firebase Authentication and get a reference to the service
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Initialize Firestore
const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);

//Intialize Firebase Storage
const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

//custom hook for exporting useAuth
export function useAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
//upload profile pictures asynch
export async function upload(file: File, currentUser: User, setLoading: (loading: boolean) => void) {
  const fileRef = ref(FIREBASE_STORAGE, 'profileImages/' + currentUser.uid + '.png');

  setLoading(true);
  
  try {
    // Upload the file to Firestore
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    // Update the user's profile with the uploaded image URL
    updateProfile(currentUser, { photoURL });
    
    setLoading(false);
    alert("Uploaded file! If the image remains the same, please try again!");
    window.location.reload();
  } catch (error) {
    console.error('Error uploading image:', error);

    // Set the photoURL to the default value
    //const defaultPhotoURL = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2c%2FDefault_pfp.svg%2F1200px-Default_pfp.svg.png&tbnid=t5PQpQ66IW5J4M&vet=12ahUKEwjApLK059GEAxWiJEQIHXLqB84QMygAegQIARBy..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&docid=o_Ii_cyIO_p3fM&w=1200&h=1200&q=default%20profile%20picture%20&ved=2ahUKEwjApLK059GEAxWiJEQIHXLqB84QMygAegQIARBy';
    //updateProfile(currentUser, { photoURL: defaultPhotoURL });

    setLoading(false);
    alert("There was an error uploading the image. Your profile picture has been set to the default.");
    window.location.reload();
  }
}




export { FIREBASE_APP, FIREBASE_ANALYTICS, 
         FIREBASE_AUTH, FIREBASE_FIRESTORE, 
         FIREBASE_STORAGE }