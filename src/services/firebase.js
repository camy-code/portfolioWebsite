// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQEWMZ1yGvJym2CZAPybtikEUGRQIBZA8",
  authDomain: "camport-b643b.firebaseapp.com",
  projectId: "camport-b643b",
  storageBucket: "camport-b643b.appspot.com",
  messagingSenderId: "447051103945",
  appId: "1:447051103945:web:aa6528f4d9cfd14647d718",
  measurementId: "G-HNRV2GVWSX"
};


// Initialize Firebase
const app=initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage();

export { auth, db, storage };



// Make dashboard with sign-out shit