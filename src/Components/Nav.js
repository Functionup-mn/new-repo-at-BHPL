import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
        <br />
        <NavLink to="/about">About Page</NavLink>
        <br />
        <NavLink to= "/contact">Contact Page</NavLink>
        <br />
    </div>
  )
}

export default Nav
