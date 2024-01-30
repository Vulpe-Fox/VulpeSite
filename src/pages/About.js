import React from 'react'

import Image1 from '../assets/vulpecold.png';
import Image2 from '../assets/vulpemoon.png';
import Image3 from '../assets/vulperef.png';
import '../styles/About.css';

function About() {
  return (
    <div className="base">
      <div className="home" style={{ backgroundImage: `url(${Image1})` }}>
        <div className="headerContainer">
        </div>
      </div>
      <div className="home2" style={{ backgroundImage: `url(${Image2})` }}>
        <div className="headerContainer">
        </div>
      </div>
      <div className="home3" style={{ backgroundImage: `url(${Image3})` }}>
        <div className="headerContainer">
        </div>
      </div>
    </div>
  )
}

export default About
