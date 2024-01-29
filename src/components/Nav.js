import React from 'react';
import tailBite from '../assets/tailBite.png';

function Nav() {
  return (
    <div className='nav'>
      <div className='vulpeLogo'>
        <img src={tailBite}/>
      </div>
      <div className='dropdowns'></div>
    </div>
  )
}

export default Nav
