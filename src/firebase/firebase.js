// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);