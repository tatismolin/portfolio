import React from "react";

import "../styles/Navigation-mobile.css";

function backDrop(props){
    return(
        <div className="back-drop" onClick={props.handleBackdropClick}>

        </div>
    );
};

export default  backDrop;