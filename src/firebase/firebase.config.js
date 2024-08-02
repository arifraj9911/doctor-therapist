// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1xG_yC_gUYp0Rbau8m0y6R2sznd4TLic",
  authDomain: "doctor-therapist.firebaseapp.com",
  projectId: "doctor-therapist",
  storageBucket: "doctor-therapist.appspot.com",
  messagingSenderId: "943059241660",
  appId: "1:943059241660:web:eaeae4fafdd70d6ee71eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;