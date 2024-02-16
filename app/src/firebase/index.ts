// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCujDhvXBefq9WoyGpdHao-qnRMVBcQcy4",
  authDomain: "ollie-notes.firebaseapp.com",
  projectId: "ollie-notes",
  storageBucket: "ollie-notes.appspot.com",
  messagingSenderId: "529059352527",
  appId: "1:529059352527:web:c401703f5c65609a000cba",
  measurementId: "G-NH7BBJ2DLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
