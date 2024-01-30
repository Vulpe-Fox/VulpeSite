import React, { useLayoutEffect, useState } from 'react';

import { Toc } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import OutsideClick from './OutsideClick';

import tailBite from '../assets/tailBite.png';

import '../styles/Nav.css';

function Nav() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNav = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (size[0] >= 900) {
        setDropdownOpen(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className='nav'>
      <div className='vulpeLogo' id={dropdownOpen ? "open" : "close"}>
        <Link to="/"> 
          <img src={tailBite}/>
        </Link>
        <div className='hiddenLinks'>
          <Link to="/about"> About </Link>
          <Link to="https://www.twitch.tv/vulpefox"> Channel </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/connect"> Connect </Link>
        </div>
      </div>
      <div className='dropdowns'>
        <Link to="/about"> About </Link>
        <Link to="https://www.twitch.tv/vulpefox"> Channel </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/connect"> Connect </Link>
        <button onClick={toggleNav}>
          <Toc />
        </button>
      </div>
    </div>
  )
}

export default OutsideClick(Nav);
