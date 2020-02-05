import React, {Component} from "react";

import "../styles/About-desktop.css";
import "../styles/About-mobile.css";

import ProfileImage from "../media/profile_image.jpg";

import Navigation from "./Navigation";
import DropDown from "./DropDown";
import BackDrop from "./BackDrop";

class About extends Component{

    state = {
        dropDownOpen: false
    };
    
    handleDrawerClick = () => {
        this.setState((prevState) => {
            return {dropDownOpen: !prevState.dropDownOpen};
        });
    };
    
    handleBackdropClick = () => {
        this.setState({
            dropDownOpen: false
        });
    };

    render(){
        const {dropDownOpen} = this.state;
        let backDrop;
        if(dropDownOpen){
            backDrop = <BackDrop click={this.handleBackdropClick} />;
        };
        return(
            <>
                <Navigation handleClick={this.handleDrawerClick} />
                <DropDown show={dropDownOpen} />   
                {backDrop}
                <div className="about">
                    <h1>ABOUT</h1>
                    <div className="about-div">
                        <img className="profile-image" src={ProfileImage} alt="profile"></img>
                        <div className="about-text">
                            <p>
                                Hi! My name is Tatiana and I code! 🙂
                                I am a Full Stack Software Engineer specializing in Ruby on Rails and JavaScript/React. 
                            </p>
                            <p> 
                                My background is 5+ years in Tech doing IT Project Management and Software Testing. 
                            </p>
                            <p> 
                                When not coding, I’m skiing during the winter and running Spartan Races during the summer.
                            </p>
                        </div>
                    </div>
                    <h2>My Skills</h2>
                    <div className="skills-div">
                        <img 
                            className="skill-image" 
                            src="https://i.ya-webdesign.com/images/ruby-transparent-rails-png-18.png" 
                            alt="ruby">   
                        </img>
                        <img 
                            className="skill-image" 
                            src="https://oneteamsolutions.in/images/upload/post-33.png" 
                            alt="react">   
                        </img>
                        <img 
                            className="skill-image" 
                            src="https://miro.medium.com/max/866/0*T6N1_5m6-H2k3bKN" 
                            alt="sql">   
                        </img>
                        <img 
                            className="skill-image" 
                            src="https://techtatva.co/techtatva140717/wp-content/uploads/2018/09/js-logo.png" 
                            alt="js">   
                        </img>
                        <img 
                            className="skill-image" 
                            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" 
                            alt="html">   
                        </img>
                        <img 
                            className="skill-image" 
                            src="https://cdn.worldvectorlogo.com/logos/css3.svg" 
                            alt="css">   
                        </img>
                    </div>
                </div>
            </>
        );
    };
};

export default  About;