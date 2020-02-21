import React, {Component} from "react";

import "../styles/Portfolio-desktop.css";
import "../styles/Portfolio-mobile.css";

class Portfolio extends Component{

    render(){
        return(
            <div className="portfolio" id="section2">
                <h1>MY PROJECTS</h1>
                <div className="projects">
                    <h3>Project 1</h3>
                    <h3>Project 2</h3>
                    <h3>Project 3</h3>
                </div>
            </div>
        );  
    };
};

export default  Portfolio;