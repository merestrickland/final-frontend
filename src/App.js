import React, { Component } from 'react';
import './App.css';
//REDUX
import {connect} from 'react-redux'
import {getProfileFetch} from './Redux/Action'
//ROUTING
import { BrowserRouter, Route } from 'react-router-dom'
import TripContainer from './containers/TripContainer'
import Home from './containers/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Error from './Error'
import UserSearch from './components/UserSearch'
import ProfileContainer from './containers/ProfileContainer'
import UserShow from './components/UserShow'
import NavBar from './components/NavBar'






 



class App extends Component {


    componentDidMount = () => {
      console.log("component did mount props", this.props)
      this.props.getProfileFetch()
    }


  render() {
   
    return (
      <div>
          {/* <Switch> */}
          <BrowserRouter>
            {/* <Route path="/" component={NavBar} /> */}
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



const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);
