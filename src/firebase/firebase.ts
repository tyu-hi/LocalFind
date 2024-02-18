// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//import { getStorage } from "firebase/auth";

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

export { FIREBASE_APP, FIREBASE_ANALYTICS, FIREBASE_AUTH, FIREBASE_FIRESTORE }