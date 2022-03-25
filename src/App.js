import LoginPage from "./components/LoginPage";

import React, { useState } from "react";
import HomePage from "./components/HomePage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  return (
    <div>
      {loggedIn ? <HomePage /> : <LoginPage setLoggedIn={setLoggedIn} />}
    </div>
  );
};

export default App;
