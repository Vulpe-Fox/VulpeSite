import React from 'react';

import HappyVulp from '../assets/forrogue.png';
import HomeImage from '../assets/sky.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="headerContainer">
        <h1>Welcome to the official Vulpefox website!</h1>
        <body>Staying wholesome* since 2023</body>
        <img src={HappyVulp} alt=""/>
      </div>
    </div>
  );
}

export default Home
