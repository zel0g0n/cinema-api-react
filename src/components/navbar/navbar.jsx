import React from 'react'
import './navbar.scss'
import logo  from '/public/logo.svg'
import logoText from '/public/logo-text.svg'
import { Link, NavLink } from 'react-router'
const Navbar = () => {
  const linkDatas = [
    {
      path: '/',
      id: 1,
      togleActive: ({isActive}) => {
        return isActive?({color: 'red'}):({color: '#fff'})
      },
      content: 'Home'
    },
    {
      path: '/popular',
      id: 2,
      togleActive: ({isActive}) => {
        return {color: isActive?'red':'#fff'}
      },
      content: 'Popular'
    },
    {
      path: '/trending',
      id: 3,
      togleActive: ({isActive}) => {
        return {color: isActive?'red':'#fff'}
      },
      content: 'Trending'
    }
  ]
  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo" />
        </Link>
      </div>
      <nav className="navbar__menu">
        <ul>
          {
            linkDatas.map(item => (
              <li key={item.id}>
                <NavLink 
                   
                  to={item.path}
                  style={item.togleActive}
                >
                  {item.content}
                </NavLink>
              </li>
            ))
          }
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar