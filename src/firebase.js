import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admino-18559.firebaseapp.com",
  projectId: "admino-18559",
  storageBucket: "admino-18559.appspot.com",
  messagingSenderId: "513262221351",
  appId: "1:513262221351:web:cbfdab0f35482473f7f602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

