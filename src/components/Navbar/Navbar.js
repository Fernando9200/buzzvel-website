import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Logo</div>
      <ul className="navbar-links">
        <li><Link to="landing" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="timeline" smooth={true} duration={500}>Timeline</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
