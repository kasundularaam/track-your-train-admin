import LoginPage from "./components/LoginPage";

import React, { useState } from "react";
import DashBoardPage from "./components/DashBoardPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  return (
    <div>
      {loggedIn ? <DashBoardPage /> : <LoginPage setLoggedIn={setLoggedIn} />}
    </div>
  );
};

export default App;
