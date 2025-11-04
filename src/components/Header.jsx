// src/components/Header.jsx

import React from 'react';
import logoImage from '../assets/images/logo.png';

// This component accepts functions (handlers) from Home.jsx
function Header({ toggleAppointmentModal, toggleMenu, isMenuOpen, isSticky }) {
  
  return (
    <header className={`ss-header ${isSticky ? 'is-sticky' : ''}`}>
      <nav className="ss-navbar ss-container">
        {/* Brand */}
        <a href="#home" className="ss-brand"><img className="logo" src={logoImage} alt="logo" /></a>

        {/* Menu - You would use the isMenuOpen prop here to conditionally apply an 'active' class */}
        <div className={`ss-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <ul className="ss-menu-inner">
            <li className="ss-menu-item"><a href="#home" className="ss-menu-link active">Home</a></li>
            <li className="ss-menu-item"><a href="#about" className="ss-menu-link">About</a></li>
            <li className="ss-menu-item"><a href="#skills" className="ss-menu-link">Skills</a></li>
            <li className="ss-menu-item"><a href="#projects" className="ss-menu-link">Projects</a></li>
            <li className="ss-menu-item"><a href="#contact" className="ss-menu-link">Contact</a></li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="ss-menu-block">
          {/* onClick uses the function passed from Home.jsx */}
          <button 
            className="ss-btn ss-btn-darken" 
            onClick={toggleAppointmentModal} 
          >
            <i className="bx bx-phone"></i> Contact
          </button>

          <button 
            type="button" 
            className={`ss-burger ${isMenuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu} 
          >
            <span className="ss-burger-line"></span>
            <span className="ss-burger-line"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;