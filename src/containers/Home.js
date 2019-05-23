import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Header from '../components/Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to={'/login'}>
            <button>Log In</button>
        </Link>
        <Link to={'/signup'}>
            <button>Sign Up</button>
        </Link>
        
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    trips: state.currentUser.trips,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

