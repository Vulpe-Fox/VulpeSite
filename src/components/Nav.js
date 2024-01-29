import React from 'react';
import { Link } from 'react-router-dom';

import tailBite from '../assets/tailBite.png';

import '../styles/Nav.css';

function Nav() {
  return (
    <div className='nav'>
      <div className='vulpeLogo'>
        <Link to="/"> 
          <img src={tailBite}/>
        </Link>
      </div>
      <div className='dropdowns'>
        <Link to="/about"> About </Link>
        <Link to="/channel"> Channel </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/connect"> Connect </Link>
      </div>
    </div>
  )
}

export default Nav
