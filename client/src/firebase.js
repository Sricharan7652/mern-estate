// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bbbdb.firebaseapp.com",
  projectId: "mern-estate-bbbdb",
  storageBucket: "mern-estate-bbbdb.firebasestorage.app",
  messagingSenderId: "838888187121",
  appId: "1:838888187121:web:b82f600d3e4bbe2f2bb550"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);