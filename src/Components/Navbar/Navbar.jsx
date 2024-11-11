import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav id='navbar' className='navbar'>
      <img src={logo} alt="Logo" />
      <img 
        src={menu_open} 
        onClick={toggleMenu} 
        className='nav-mob-open' 
        alt="Menu open" 
      />
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <img 
          src={menu_close} 
          onClick={closeMenu} 
          alt="Close menu" 
          className="nav-mob-close"
        />
        <li>
          <AnchorLink href="#home" offset='100' onClick={closeMenu}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" offset='100' onClick={closeMenu}>
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#mywork-block" offset='100' onClick={closeMenu}>
            My Work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" offset='100' onClick={closeMenu}>
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink href="#contact" offset='100'>
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  )
}

export default Navbar