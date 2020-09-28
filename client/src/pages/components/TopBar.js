import React from 'react';
import {Link} from "react-router-dom";
import "./TopBar.css";

function TopBar(props) {
    return(

      <div data-sticky-container>
        <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
          <div className="top-bar topbar-sticky-shrink">
            <div className="top-bar-title">
              <p id="top" className="rainbow-text">H-Town Fusion</p>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li>
                <Link 
                  className="link" 
                  to="/home">
                  Home
                </Link>
                </li>
                <li>
                <Link 
                  className="link" 
                  to="/news">
                  News
                </Link>
                </li>
                <li>
                <Link 
                  className="link" 
                  to="/community">
                  Community
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
}

export default TopBar;