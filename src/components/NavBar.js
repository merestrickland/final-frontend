import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
// import { connect } from 'react-redux'


class NavBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return (
     
      <Menu>
        <Menu.Item
          as={Link} to='/home'
          name='home'
          active={activeItem === 'home'}
          content='Home'
          onClick={this.handleItemClick}
        />
        {/* <Menu.Item
          as={Link} to='/trips'
          name='trips'
          active={activeItem === 'trips'}
          content='My Trips'
          onClick={this.handleItemClick}
        /> */}
        <Menu.Item
          as={Link} to='/profile'
          name='profile'
          active={activeItem === 'profile'}
          content='My Profile'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/users'
          name='users'
          active={activeItem === 'users'}
          content='Search Users'
          onClick={this.handleItemClick}
        />
        
          
      </Menu>
  
  
      // <ul>
      //   <li><Link to={"/home"}>Home</Link></li>
      //   <li><Link to={"/trips"}>My Trips</Link></li>
      //   <li><Link to={"/profile"}>My Profile</Link></li>
      //   <li><Link to={"/users"}>Search Users</Link></li>
      //   <li><Link to={"/login"}>Log In</Link></li>
      //   <li><Link to={"/signup"}>Sign Up</Link></li>
      // </ul>
    )
  }

}




export default NavBar
