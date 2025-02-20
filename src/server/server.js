
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAMYu-aq3J5ZAadaiH4k4wOJ1AsLPQoNK4",
  authDomain: "fir-project-c0f08.firebaseapp.com",
  projectId: "fir-project-c0f08",
  storageBucket: "fir-project-c0f08.firebasestorage.app",
  messagingSenderId: "910278052642",
  appId: "1:910278052642:web:9c8a220062e8f01277f37b",
  measurementId: "G-SN5PS12M4F",
  databaseURL: "https://fir-project-c0f08-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
