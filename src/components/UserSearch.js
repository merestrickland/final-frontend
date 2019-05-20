import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Switch, Route} from 'react-router-dom'
import * as actionCreators from '../Redux/Action'

class UserSearch extends Component {

    componentDidMount(){
        this.props.getUsersCreator()
    }


  render() {
      console.log(this.props)
    return (
      <div>
        <h2>User Search Page</h2>
        <ul>
        {this.props.users.map(user => {
           return  <li>{user.first_name}</li>
        })}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    //mapState is always going to expect some sort of object
    //take the values of the object and return them to the props using the keys
    //you don't need all of state to go into TripContainer
    //just want to return some parts of state
    //the key is the prop that we are creating
    return {
      users: state.users,
    }
  }


export default connect(mapStateToProps, actionCreators)(UserSearch)
