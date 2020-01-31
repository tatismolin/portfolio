import React from "react";

import "../styles/Navigation-mobile.css";

function drawerToggleButton(props){
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
    );
};

export default  drawerToggleButton;