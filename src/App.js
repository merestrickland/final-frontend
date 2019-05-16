import React, { Component } from 'react';
import './App.css';
//REDUX
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
//ROUTING
import {BrowserRouter, Switch, Route, Link, withRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import TripContainer from './containers/TripContainer'
// console.log(TripContainer)



 



class App extends Component {

  setUser = (userInformation, token) => {
    this.setState({
      user: userInformation
    })
  }



  render() {
    return (
      <div>
        <h1>Welcome to TripList</h1>
        <Header />
        <TripContainer />
      {/* <Provider>
        <Switch>
          <Route path='/login' render={()=> <LoginForm setUser={this.setUser}/> } />
        </Switch>
        </Provider> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(App);
