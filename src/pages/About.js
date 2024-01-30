import React from 'react'

import Image1 from '../assets/vulpecold.png';
import Image2 from '../assets/vulpemoon.png';
import Image3 from '../assets/vulperef.png';
import '../styles/About.css';

function About() {
  return (
    <div className="base">
      <div className="home1" style={{ backgroundImage: `url(${Image1})` }}>
        <div className="aboutContainer" id="first">
          <h1>Howdy, I'm Vulpe!</h1>
          <body>I'm some nerdy gay fox on the internet who streams some silly little games and math-based education. I go by she/they pronouns. So thanks for coming by, it's nice to meet you!
          </body>
        </div>
      </div>
      <div className="home2" style={{ backgroundImage: `url(${Image2})` }}>
        <div className="aboutContainer" id="second">
         <h1>About My Channel</h1>
          <body>
          I'm a streamer who values pawsitivity and maintaining a relaxed atmosphere during my streams. <br /> 
          </body>
          <body>
            My focus is primarily on VRChat, but sometimes I like to unleash my wild side and play other games, too. My aim is to ensure that you feel right at home with us. You are valuable, and I appreciate you!
          </body>
        </div>
      </div>
      <div className="home3" style={{ backgroundImage: `url(${Image3})` }}>
        <div className="aboutContainer" id="third">
          <h1>Here is the ref of how I look ^w^</h1>
        </div>
      </div>
    </div>
  )
}

export default About
