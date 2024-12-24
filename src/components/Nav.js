import React from 'react';

//import { Toc } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import tailBite from '../assets/tailBite.png';

import '../styles/Nav.css';

function Nav() {

  //const [dropdownOpen, setDropdownOpen] = useState(false);

  /*const toggleNav = () => {
    setDropdownOpen(!dropdownOpen);
  }*/
  
  /*const [size, setSize] = useState([0, 0]);

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
  }, []);*/
  /*id={dropdownOpen ? "open" : "close"}*/
  /*<button onClick={toggleNav}>
          <Toc />
        </button> */

  return (
    <div className='nav'>
      <div className='vulpeLogo'>
        <Link to="/"> 
          <img src={tailBite} alt=""/>
        </Link>
        <div className='hiddenLinks'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/projects"> Projects </Link>
          {/*<Link to="/connect"> Connect </Link>*/}
          <Link to="https://www.twitch.tv/vulpe"> Channel </Link>
        </div>
      </div>
      <div className='dropdowns'>
          <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="https://www.twitch.tv/vulpe"> Channel </Link>
        {/*<Link to="/connect"> Connect </Link>*/}
      </div>
    </div>
  )
}

export default Nav;
