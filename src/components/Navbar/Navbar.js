import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className={`navbar-links ${isOpen ? 'navbar-links-mobile' : ''}`}>
        <li><Link to="landing" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="timeline" smooth={true} duration={500} onClick={closeMenu}>Timeline</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
}

export default Navbar;
