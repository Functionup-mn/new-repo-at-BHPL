import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  // To highlight the component
  const navLinkStyle = ({isActive}) =>{
    return{
      color: isActive ? "gray": "white",
      fontSise:"20px"
    }
  }

  return (
    <div className='header'>
      <NavLink style={navLinkStyle} to={'/'}>Home</NavLink>

      <NavLink style={navLinkStyle} to={'/About'}>About</NavLink>

      <NavLink style={navLinkStyle} to={'/contact'}>Contact</NavLink>

    </div>
  )
}

export default Header
