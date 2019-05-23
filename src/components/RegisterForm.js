import React, { Component } from 'react'
import {connect} from 'react-redux'
import {userPostFetch} from '../Redux/Action'
import {withRouter} from 'react-router-dom'

class Register extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
    this.props.history.push('/profile')
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up for TripList</h1>

        <label>First Name</label>
        <input name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleChange}/>
        <br />

        <label>Last Name</label>
        <input name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange}/>
        <br />

        <label>Email</label>
        <input name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
        <br />

        <label>Password</label>
        <input name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
        <br />

        <input type='submit' />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(withRouter(Register))