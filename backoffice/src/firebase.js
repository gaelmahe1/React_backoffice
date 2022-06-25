// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration 

const firebaseConfig = {
  apiKey: "AIzaSyAinhix-nX1sVwWGWRMDnKhvfnP6iVrPbA",
  authDomain: "backoffice-eae5d.firebaseapp.com",
  projectId: "backoffice-eae5d",
  storageBucket: "backoffice-eae5d.appspot.com",
  messagingSenderId: "657712992213",
  appId: "1:657712992213:web:3d80ae95a751589c7e375c",
  measurementId: "G-BBJMRJVJN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth()