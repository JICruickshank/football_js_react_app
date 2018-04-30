import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <div className='navbar'>
    <ul>
      <li>
        <Link className='navlink' to='/'>HOME</Link>
      </li>
      <li>
        <Link className='navlink' to='/league'>LEAGUE</Link>
      </li>
      <li>
        <Link className='navlink' to='/fixtures'>FIXTURES</Link>
      </li>
      <li>
        <Link className='navlink' to='/favourites'>MY FAVOURITES</Link>
      </li>
    </ul>
  </div>
)

export default Navbar;
