import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../Redux/Action'

class ProfileContainer extends Component {
  render() {
      console.log("Profile props", this.props)
    return (
      <div>
        
        <h1>Welcome, {this.props.user.first_name}</h1>
        <h2></h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("profile props", state)
  return {
    user: state.currentUser,
    trips: state.currentUser.trips
  }
}


export default connect(mapStateToProps, actionCreators)(ProfileContainer)

