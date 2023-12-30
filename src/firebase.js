// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuI9tNoJQTzhGuSRDR5EIw4acPVltZBto",
  authDomain: "chatapp-a5ebc.firebaseapp.com",
  databaseURL: "https://chatapp-a5ebc-default-rtdb.firebaseio.com",
  projectId: "chatapp-a5ebc",
  storageBucket: "chatapp-a5ebc.appspot.com",
  messagingSenderId: "248503964901",
  appId: "1:248503964901:web:34f914234e17ee9d4f700c",
  measurementId: "G-7W53HQRFPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
