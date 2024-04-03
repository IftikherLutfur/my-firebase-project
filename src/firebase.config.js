// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZqzHUgvgO7avjRvC7onFpMtJ0FX4Itk",
  authDomain: "happy-shopping-firebase.firebaseapp.com",
  projectId: "happy-shopping-firebase",
  storageBucket: "happy-shopping-firebase.appspot.com",
  messagingSenderId: "963050723841",
  appId: "1:963050723841:web:819882911f2f458b35fe00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;