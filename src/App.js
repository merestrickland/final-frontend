import React, { Component } from 'react';
import './App.css';
//REDUX
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
import {getProfileFetch} from './Redux/Action'
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

  // state = {
  //   user: {},
  //   token: ""
  // }

    componentDidMount = () => {
      console.log("component did mount props", this.props)
      this.props.getProfileFetch()
    }

  //  setUser = (userInformation, token) => {
  //   this.setState({
  //     user: userInformation
  //   })
  // }
  // render={()=> <LoginForm setUser={this.setUser}}


  render() {
    console.log("APP STATE", this.state)
    console.log("APP PROPS", this.props)
    return (
      <div>
          {/* <Switch> */}
          <BrowserRouter>
            <Route path="/" component={NavBar} />
            <Route path="/home" component={Home} />
            <Route path='/login'  component={LoginForm}/>
            <Route path="/signup" component={RegisterForm} />
            <Route path="/profile" component={ProfileContainer} />
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

// const mapStateToProps = (state) => ({
  
//   currentUser: state.currentUser
// })

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);
