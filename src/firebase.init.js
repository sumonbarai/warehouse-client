// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDyeNr6iCDwnmEKSMIrVujQm2XhZsvq5ac",
//   authDomain: "warehouse-95574.firebaseapp.com",
//   projectId: "warehouse-95574",
//   storageBucket: "warehouse-95574.appspot.com",
//   messagingSenderId: "101154468605",
//   appId: "1:101154468605:web:229c8cf6e0f75b5cc74494",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
