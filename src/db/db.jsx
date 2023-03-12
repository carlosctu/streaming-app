// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41hutVYcUrElQejWBEPBv99pCV_s6eaY",
  authDomain: "streaming-app-2e0ac.firebaseapp.com",
  projectId: "streaming-app-2e0ac",
  storageBucket: "streaming-app-2e0ac.appspot.com",
  messagingSenderId: "742939460476",
  appId: "1:742939460476:web:80e390615b57377ad31af9",
  measurementId: "G-XHPLK04GLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);