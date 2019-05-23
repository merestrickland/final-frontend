import React from 'react'
import {Link} from 'react-router-dom'

// import { connect } from 'react-redux'


const NavBar = (props) => {
  return (

    <ul>
      <li><Link to={"/home"}>Home</Link></li>
      <li><Link to={"/trips"}>My Trips</Link></li>
      <li><Link to={"/profile"}>My Profile</Link></li>
      <li><Link to={"/users"}>Search Users</Link></li>
      <li><Link to={"/login"}>Log In</Link></li>
      <li><Link to={"/signup"}>Sign Up</Link></li>
    </ul>
  )
}


export default NavBar
