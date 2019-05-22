import React from 'react'
import {Link} from 'react-router-dom'

// import { connect } from 'react-redux'


const NavBar = (props) => {
  return (

    <ul>
      <li><Link to={"/trips"}>My Trips</Link></li>
      <li><Link to={"/users"}>Search Users</Link></li>
    </ul>
  )
}


export default NavBar
