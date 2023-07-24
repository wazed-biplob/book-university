import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLfK3Rv8LDFMt3M1LO2PbGabQWpCseoOI",
  authDomain: "book-university.firebaseapp.com",
  projectId: "book-university",
  storageBucket: "book-university.appspot.com",
  messagingSenderId: "337743488414",
  appId: "1:337743488414:web:a2166ce77b349277a2e28f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
