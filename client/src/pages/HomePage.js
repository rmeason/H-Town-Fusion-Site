import React from 'react';
import "./HomePage.css";
import aboutImg from "../img/h-town-about.jpg";

function HomePage() {
    return(
        <div class="about-the-author">
  <h3 class="author-title">H-Town Fusion</h3>
  <div class="row">
    <div class="small-12 medium-4 columns">
      <div class="author-image">
        <img src={aboutImg} />
      </div>
      <div class="author-social">
        <a href="#">
          <span class="fa-stack fa-lg facebook">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a href="#">
          <span class="fa-stack fa-lg twitter">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a href="#">
          <span class="fa-stack fa-lg linkedin">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="small-12 medium-8 columns">
      <h4 class="separator-left">Barack Obama</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.</p>
    </div>
  </div>
</div>


    )
}

export default HomePage;