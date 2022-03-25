import LoginPage from "./components/LoginPage";

import React, { useState } from "react";
import HomePage from "./components/HomePage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxhWXef7-OjlJ2bQSbEqzaOGmzJva9eek",
  authDomain: "track-your-train-842bc.firebaseapp.com",
  projectId: "track-your-train-842bc",
  storageBucket: "track-your-train-842bc.appspot.com",
  messagingSenderId: "870348995801",
  appId: "1:870348995801:web:0d406ff856e7872a11d2c8",
  measurementId: "G-HRGPHEW6DX",
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  return (
    <div>
      {loggedIn ? <HomePage /> : <LoginPage setLoggedIn={setLoggedIn} />}
    </div>
  );
};

export { App, app };
