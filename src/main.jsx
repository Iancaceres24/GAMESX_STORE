import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {initializeApp} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBP7BN72ZDL2Sd_ltFciwQI-YNsMjWNmyw",
  authDomain: "gamesxstore-4d749.firebaseapp.com",
  projectId: "gamesxstore-4d749",
  storageBucket: "gamesxstore-4d749.appspot.com",
  messagingSenderId: "412539714254",
  appId: "1:412539714254:web:d8430c87e75d7c6b6cae9f"
};

initializeApp(firebaseConfig)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
