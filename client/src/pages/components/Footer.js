import React from 'react';
import "./Footer.css";

function Footer() {
    return(

<footer className="marketing-site-footer">
  <div className="row medium-unstack">
    <div className="medium-4 columns">
      <h4 className="marketing-site-footer-name">Good Resources</h4>
      <p></p>
      {/* <ul className="menu marketing-site-footer-menu-social simple">
        <li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
         <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
      </ul> */}
    </div>
    <div className="medium-4 columns">
       <h4 className="marketing-site-footer-title">Contact Info</h4>
      {/* <div className="marketing-site-footer-block">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <p>100 W Rincon<br />San Francisco, CA 94015</p>
      </div> */}
      {/* <div className="marketing-site-footer-block">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <p>1 (800) 555-5555</p>
      </div> */}
      <a href="mailto: htownfusion18@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="marketing-site-footer-block">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <p>htownfusion18@gmail.com</p>
        </div>
      </a>
    </div>
    <div className="medium-4 columns">
      <h4 className="marketing-site-footer-title">Instagram</h4>
      <div className="row small-up-3">
        <div className="column column-block">
          <img src="https://placehold.it/75" alt="inta1" />
        </div>
        <div className="column column-block">
          <img src="https://placehold.it/75" alt="inta2" />
        </div>
        <div className="column column-block">
          <img src="https://placehold.it/75" alt="inta3" />
        </div>
        <div className="column column-block">
          <img src="https://placehold.it/75" alt="inta4" />
        </div>
        <div className="column column-block">
          <img src="https://placehold.it/75" alt="inta5" />
        </div>
        <div className="column column-block">
          <img src="https://placehold.it/75" alt="inta6" />
        </div>
      </div>
    </div>
  </div>
  <div className="marketing-site-footer-bottom">
    <div className="row large-unstack align-middle">
      <div className="column">
        <p>&copy; 2018 all rights reserved</p>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer;