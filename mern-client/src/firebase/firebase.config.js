// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhyxIWewiD-2H4DByYw1MqMyYGhvWl6sU",
  authDomain: "mern-book-inventory-e371f.firebaseapp.com",
  projectId: "mern-book-inventory-e371f",
  storageBucket: "mern-book-inventory-e371f.appspot.com",
  messagingSenderId: "544099220599",
  appId: "1:544099220599:web:b0acbb35fbe4bec40c5a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;