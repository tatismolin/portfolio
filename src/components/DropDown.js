import React from "react";

import "../styles/DropDown.css";

function dropDown(props){
    let drawerClasses = "drop-down";
    if(props.show){
        drawerClasses = "drop-down open";
    };
    return(
        <div className={drawerClasses}>
            <h2 className="drop-down-text">HOME</h2>
            <h2 className="drop-down-text">ABOUT</h2>
            <h2 className="drop-down-text">PORTFOLIO</h2>
            <h2 className="drop-down-text">BLOG</h2>
            <h2 className="drop-down-text">CONTACT</h2>
        </div>
    );
};

export default  dropDown;