import React, {Component} from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import Header from './components/Header'

//REDUX
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import {fetchTrips} from './Redux'

//ROUTING
import {BrowserRouter, Switch, Route, Link, withRouter} from 'react-router-dom'

// import TripContainer from './containers/TripContainer'


// const store = createStore();

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
      <Provider>
      
        <Switch>
          <Route path='/login' render={()=> <LoginForm setUser={this.setUser}/> } />
        </Switch>
        </Provider>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(App);
