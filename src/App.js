import React, { Component } from 'react';
import './App.css';
//REDUX
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
//ROUTING
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import TripContainer from './containers/TripContainer'
import Home from './containers/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Error from './Error'
import UserSearch from './components/UserSearch'
import ProfileContainer from './containers/ProfileContainer'
import UserShow from './components/UserShow'
import NavBar from './components/NavBar'
// console.log(TripContainer)





 



class App extends Component {

  state = {
    user: {},
    token: ""
  }

    // componentDidMount = () => {
    //   this.props.getProfileFetch()
    // }

   setUser = (userInformation, token) => {
    this.setState({
      user: userInformation
    })
  }



  render() {
    console.log("APP STATE", this.state)
    console.log("APP PROPS", this.props)
    return (
      <div>
          {/* <Switch> */}
          <BrowserRouter>
            <Route path="/" component={NavBar} />
            <Route path="/home" component={Home} />
            <Route path='/login' render={()=> <LoginForm setUser={this.setUser}/> } />
            <Route path="/signup" render={()=> <RegisterForm /> } />
            <Route path="/profile" render={()=> <ProfileContainer user={this.props.currentUser} token={this.props.token} /> } />
            <Route path="/trips" component={TripContainer} />
            <Route exact path="/users" component={UserSearch} />
            <Route exact path="/users/:id" component={UserShow} />
            
            
            <Route path="/404" component={Error} />
          </BrowserRouter>
          {/* </Switch> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App);
