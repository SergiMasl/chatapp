// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS_Gb_arEqUtZAaQHdt4VcSu0WCfLDn6Q",
  authDomain: "chatapp-b687a.firebaseapp.com",
  projectId: "chatapp-b687a",
  storageBucket: "chatapp-b687a.appspot.com",
  messagingSenderId: "406117965576",
  appId: "1:406117965576:web:88e2e6d78cb109a0f796bd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
