import React from 'react'
import './navbar.scss'
import logo  from '/public/logo.svg'
import logoText from '/public/logo-text.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <a href="#">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo" />
        </a>
      </div>
      <nav className="navbar__menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">TV Shows</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar