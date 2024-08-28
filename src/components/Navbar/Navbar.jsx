import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        
        setOffset(-60); 
      } else {
        
        setOffset(-60); 
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className={`navbar-links ${isOpen ? 'navbar-links-mobile' : ''}`}>
        <li><Link to="landing" smooth={true} duration={500} onClick={closeMenu} offset={offset}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={closeMenu} offset={offset}>About</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500} onClick={closeMenu} offset={offset}>Portfolio</Link></li>
        <li><Link to="timeline" smooth={true} duration={500} onClick={closeMenu} offset={offset}>Timeline</Link></li>
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
