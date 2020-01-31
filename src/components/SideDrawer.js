import React from "react";

import "../styles/Navigation-mobile.css";

function sideDrawer(props){
    let drawerClasses = "side-drawer";
    if(props.show){
        drawerClasses = "side-drawer open";
    }
    return(
        <div className={drawerClasses}>
            <h2 className="side-drawer-text">HOME</h2>
            <h2 className="side-drawer-text">ABOUT</h2>
            <h2 className="side-drawer-text">PORTFOLIO</h2>
            <h2 className="side-drawer-text">BLOG</h2>
            <h2 className="side-drawer-text">CONTACT</h2>
        </div>
    );
};

export default  sideDrawer;