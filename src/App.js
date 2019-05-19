import React, { Component } from 'react';
import './App.css';
//REDUX
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
//ROUTING
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import TripContainer from './containers/TripContainer'
import Home from './containers/Home'
import LoginForm from './components/LoginForm'
import Error from './Error'
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
        
        {/* <Provider> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/trips" component={TripContainer} />
            <Route path="/" component={Error} />
            
          </Switch>
        {/* </Provider> */}
        

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
