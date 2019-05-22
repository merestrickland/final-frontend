import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchLogin} from '../Redux/Action'
import * as actionCreators from '../Redux/Action'
import {Link, Redirect} from 'react-router-dom'

class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        console.log("it's this one", this.props)
        this.props.history.push('/profile')
    }



  render() {
      console.log("loginform props", this.props)
    
    return (
      <div>
          <h3>Log In</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
                Email Address:
                <input type="text" name="email"  onChange={this.handleChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={this.handleChange}/>
            </label>
            <Link to={"/profile"}>
            <input type="submit"/>
            </Link>
          </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {user: state.currentUser}
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userInfo) => dispatch(fetchLogin(userInfo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
