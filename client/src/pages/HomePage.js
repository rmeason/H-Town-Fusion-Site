import React from 'react';
import "./HomePage.css";
import aboutImg from "../img/Logo.jpg";

function HomePage() {
    return(
      <div class="about-the-author">
        <br />
        <br />
        <br />
        <div class="row">
          <div class="small-12 medium-4 columns">
            <div class="author-image">
              <img src={aboutImg} />
            </div>
            <div class="author-social">
              <a href="https://www.facebook.com/groups/2067701856882918" 
                target="_blank">
                <span class="fa-stack fa-lg facebook">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href="https://www.instagram.com/h_town_fusion/" 
                target="_blank">
                <span class="fa-stack fa-lg instagram">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              {/* <a href="#" 
                target="_blank">
                <span class="fa-stack fa-lg twitter">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a> */}
            </div>
          </div>
          <div class="small-12 medium-8 columns">
            <h3 class="separator-center">About Us</h3>
            <h5>We are H-Town Fusion, Houston’s premier fusion dancing organization, and our mission is create safer spaces.
            </h5>
            <h5>We do this by connecting dancers from all sides of Houston and the greater Texas dance communities together to share their love of dancing with a variety of music ranging from pop, hip-hop, edm, jazz, blues, latin and anything else that inspires expressive movement. Dancing is our passion and we strive to bring the creativity and connection of partner dancing to all corners of the musical spectrum, as well as introduce newcomers to a friendly and accepting dance environment.
            </h5>
            <h5>Check out our social media pages to see the dates for our monthly fusion dances as well as stay up to date with any other dance happenings in Houston. We encourage dancers to collaborate and support each other so feel free to post or let us know about dance events we missed, post some cool music you found, post a cool dance video, or just say hi!
            </h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

    )
}

export default HomePage;