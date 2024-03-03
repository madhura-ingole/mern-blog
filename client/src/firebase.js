// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-33faf.firebaseapp.com",
  projectId: "blog-mern-33faf",
  storageBucket: "blog-mern-33faf.appspot.com",
  messagingSenderId: "1085940510282",
  appId: "1:1085940510282:web:416b2bcf6d2ef75c1580b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);