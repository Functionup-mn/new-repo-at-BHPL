import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
       <Link to={'insta'}><h3>Contact via Instagram</h3></Link> 
     <Link to={'mail'}><h3>Contact via Mail</h3></Link>
     <Outlet/> 
    </div>
  )
}

export default Contact
