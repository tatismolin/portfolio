import React from "react";
import "./styles/App-desktop.css";
import "./styles/App-mobile.css";

function App(){
  return(
    <div className="App">
      <div className="main-div">
        <div className="main-text-align">
          <h1 className="main-text">Hello, I'm</h1>
          <h1 className="main-text highlight">Tatiana Smolin.</h1>
        </div>
        <h1 className="main-text">I'm a full-stack web developer.</h1>
        <button className="main-button">View my work</button>
      </div>
    </div>
  );
};

export default App;
