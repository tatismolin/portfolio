import React, {Component} from "react";

import "./styles/App-desktop.css";
import "./styles/App-mobile.css";

import Navigation from "./components/Navigation";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/BackDrop";

class App extends Component{

  state = {
    sideDrawerOpen: false
  };

  handleDrawerClick = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  handleBackdropClick = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render(){
    let backDrop;

    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop click={this.handleBackdropClick} />;
    }
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
        <Navigation handleClick={this.handleDrawerClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />        
        {backDrop}
      </div>
    );
  };

};

export default App;
