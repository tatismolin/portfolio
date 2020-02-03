import React, {Component} from "react";

import "../styles/About-desktop.css";
import "../styles/About-mobile.css";

import Navigation from "./Navigation";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

class About extends Component{

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
            <>
                <Navigation handleClick={this.handleDrawerClick} />
                <SideDrawer show={this.state.sideDrawerOpen} />   
                {backDrop}
            <div className="about">
                <h1>ABOUT</h1>
                <h3>
                    Hi! My name is Tatiana and I code! 🙂
                    I am a Full Stack Software Engineer specializing in Ruby on Rails and JavaScript/React. 
                    My background is 5+ years in Tech doing IT Project Management and Software Testing. 
                    When not coding, I’m skiing during the winter and running Spartan Races during the summer.
                </h3>
                <h1>My Skills</h1>
                <img src="https://i.ya-webdesign.com/images/ruby-transparent-rails-png-18.png" alt="ruby"></img>
            </div>
            </>
        );
    };
};

export default  About;