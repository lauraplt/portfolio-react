import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#home" offset='100'>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" offset='100'>
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#mywork-block" offset='100'>
            My Work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" offset='100'>
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