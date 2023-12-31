import React from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon names
import { Link } from 'react-router-dom';

function Navbar() { // Use camelCase for the component name (Navbar instead of navbar)
  return (
    <div className='nav'>

      <div className='left'>
        <Link to="/" className='title'>SneakStar</Link>
      </div>

      <ul className='right'>
        
        <li><Link className='cart' to="/buynow"><FontAwesomeIcon icon={faBagShopping} /></Link></li>
        
        <li><FontAwesomeIcon icon={faUser} /></li>

        <li><Link className='buynow' to="/buynow">BUY NOW</Link></li>
      
      </ul>

    </div>
  );
}

export default Navbar;
