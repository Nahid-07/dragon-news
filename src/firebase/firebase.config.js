// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1gCmQ4-l_8_ifzL37uyME273wbxyx1Ns",
  authDomain: "dragon-news-41a5c.firebaseapp.com",
  projectId: "dragon-news-41a5c",
  storageBucket: "dragon-news-41a5c.firebasestorage.app",
  messagingSenderId: "603878984338",
  appId: "1:603878984338:web:f72b99c52c9a0d7b4bb44b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app