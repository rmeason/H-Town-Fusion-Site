import React from 'react';
import "./TopBar.css";

function TopBar() {
    return(

<div data-sticky-container>
  <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
    <div class="top-bar topbar-sticky-shrink">
      <div class="top-bar-title">
        <p id="top" class="rainbow-text">H-Town Fusion</p>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><a href="/, /home">Home</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/community">Community</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>



    )
}

export default TopBar;