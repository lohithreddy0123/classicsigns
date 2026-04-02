import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABOfPvyb17cX-eCZ7fV6eQO0Z3Uo_LhCY",
  authDomain: "classicporcelainsigns.firebaseapp.com",
  projectId: "classicporcelainsigns",
  storageBucket: "classicporcelainsigns.appspot.com",
  messagingSenderId: "79797691616",
  appId: "1:79797691616:web:fb8c1bb782e28b4fa55c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Firestore database export
export const db = getFirestore(app);