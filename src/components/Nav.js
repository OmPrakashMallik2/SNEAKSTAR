import React from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon names

function Navbar() { // Use camelCase for the component name (Navbar instead of navbar)
  return (
    <div className='nav'>
      <div className='left'>
        <a className='title'>Product</a>
      </div>
      <ul className='right'>
        <li>
          <FontAwesomeIcon icon={faBagShopping} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} /> 
        </li>
        <li><a>BUY NOW</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
