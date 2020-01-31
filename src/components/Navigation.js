import React from "react";

import "../styles/Navigation-desktop.css";
import "../styles/Navigation-mobile.css";

function Navigation(){
  return(
    <div className="Navigation">
      <div className="navigation-div">
          <h2 className="navigation-text">HOME</h2>
          <h2 className="navigation-text">ABOUT</h2>
          <h2 className="navigation-text">PORTFOLIO</h2>
          <h2 className="navigation-text">BLOG</h2>
          <h2 className="navigation-text">CONTACT</h2>
      </div>
    </div>
  );
};

export default Navigation;
