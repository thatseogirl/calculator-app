import React from "react";
import "./Theme.css";

export default function Theme() {
  const handleFirstBackground = () => {
    let App = document.querySelector(".App");
    let toggle = document.getElementById("circle");
    App.classList.remove("active1");
    App.classList.remove("active2");
    toggle.style.left = "0";
  };

  const handleSecondBackground = () => {
    let App = document.querySelector(".App");
    let toggle = document.getElementById("circle");
    App.classList.add("active1");
    App.classList.remove("active2");
    toggle.style.left = "46%";
  };

  const handleThirdBackground = () => {
    let App = document.querySelector(".App");
    let toggle = document.getElementById("circle");
    App.classList.add("active2");
    App.classList.remove("active1");
    toggle.style.left = "85%";
  };

  return (
    <div className="title">
      <div className="right">
        <p id="one" className="button" onClick={handleFirstBackground}>
          1
        </p>
        <p id="two" className="button" onClick={handleSecondBackground}>
          2
        </p>
        <p id="three" className="button" onClick={handleThirdBackground}>
          3
        </p>
      </div>
      <div className="toggle">
        <h3>calc</h3>
        <div className="control">
          <p>Theme</p>
          <div className="box">
            <div id="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
