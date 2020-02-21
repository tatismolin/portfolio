import React, {Component} from "react";
import {Link} from "react-scroll";

import "./styles/App-desktop.css";
import "./styles/App-mobile.css";

import About from "./components/About";
import Portfolio from "./components/Portfolio";

class App extends Component{

  render(){
    return(
      <>
        <div className="app" id="section0">
          <div className="main-div">
              <h1 className="main-text left-text">Hello, I'm</h1>
              <h1 className="main-text highlight">Tatiana Smolin.</h1>
            <div className="main-text-align">
            <h1 className="main-text">I'm a full-stack web developer.</h1>
            <Link
              to="section1" 
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}>
              <button className="main-button">View my work</button>
            </Link>
            </div>
          </div>
        </div>
        <About />
        <Portfolio />
      </>
    );
  };

};

export default App;
