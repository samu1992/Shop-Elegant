import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/styles.scss'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoeLxQuUr8BFG30uQcWj6Dd_xtUDvrMKg",
  authDomain: "react-ecommerce-9bf98.firebaseapp.com",
  projectId: "react-ecommerce-9bf98",
  storageBucket: "react-ecommerce-9bf98.appspot.com",
  messagingSenderId: "274644164790",
  appId: "1:274644164790:web:e30967b8f2ce61a2f74617"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
