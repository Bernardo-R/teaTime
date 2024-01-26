// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvMAq9Be3Q0zkVjWuNCit8Yi266MA7aYc",
  authDomain: "teatimeauth.firebaseapp.com",
  projectId: "teatimeauth",
  storageBucket: "teatimeauth.appspot.com",
  messagingSenderId: "44575371468",
  appId: "1:44575371468:web:2564fac70ee81f488f9269",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
