import React from "react";
import "./App.css";
import Button from "./component/Button/Button";
import Theme from "./component/Theme/Theme";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Theme />
        <Button />
      </div>
    </div>
  );
}

export default App;
