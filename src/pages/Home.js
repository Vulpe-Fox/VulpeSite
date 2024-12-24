import React from 'react';

import HappyVulp from '../assets/forrogue.png';
import HomeImage from '../assets/sky.jpg';

import { TwitchPlayer/*, TwitchChat*/ } from 'react-twitch-embed';

import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="headerContainer">
        <img src={HappyVulp} alt=""/>
        <h1>Welcome to the official Vulpe website!</h1>
        <body>Staying wholesome* since 2023</body>
      </div>
      <div className="twitchContainer">
        <TwitchPlayer channel="vulpe" id="woof" height="45vh" width="100%" />
        {/*<TwitchChat channel="vulpe" id="woof1" />*/}
      </div>
    </div>
  );
}

export default Home
