// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8BMIqHHlu_stnOKPZt2vGAEyRM274g4",
  authDomain: "realtor-clone-react-bc594.firebaseapp.com",
  projectId: "realtor-clone-react-bc594",
  storageBucket: "realtor-clone-react-bc594.appspot.com",
  messagingSenderId: "730777539546",
  appId: "1:730777539546:web:15f9101a147944480b66e3",
  measurementId: "G-GQGRDTRXSV",
};

// Initialize Firebase
//const app =

initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//export const db = firebase.getFirestore()
export const db = getFirestore();
