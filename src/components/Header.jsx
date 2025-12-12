import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const logo = require('../assets/img/home/Logo.png');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggle menu clicked! Current state:', isMenuOpen);
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (newState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    console.log('New state will be:', newState);
  };

  const closeMenu = () => {
    console.log('Close menu called');
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>About</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Pricing</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active contact-link' : 'nav-link contact-link')} onClick={closeMenu}>Contact Us →
              <span className="nav-line" aria-hidden="true"></span>
            </NavLink>
          </nav>
          
          {/* Бургер кнопка */}
          <button 
            className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {/* Backdrop - зовні container щоб не перекривав header */}
      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </header>
  );
}
