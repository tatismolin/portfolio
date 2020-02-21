import React from "react";
import {Link} from "react-scroll";

import "../styles/Navigation-desktop.css";
import "../styles/Navigation-mobile.css";

import DrawerToggleButton from "./DrawerToggleButton";

function Navigation(props){

    return(
        <div className="navigation" id="section1">
            <DrawerToggleButton click={props.handleClick} />
            <div className="navigation-links">
            <Link
                to="section0" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
                <h2 className="navigation-text">HOME</h2>
            </Link>
            <Link
                to="section1" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
                <h2 className="navigation-text">ABOUT</h2>
            </Link>
            <Link
                to="section2" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
                <h2 className="navigation-text">PORTFOLIO</h2>
            </Link>
            <Link
                to="section3" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
                <h2 className="navigation-text">BLOG</h2>
            </Link>
            <Link
                to="section4" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
                <h2 className="navigation-text">CONTACT</h2>
            </Link>
            </div>
        </div>
    );
};

export default Navigation;
