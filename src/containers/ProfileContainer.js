import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../Redux/Action'

class ProfileContainer extends Component {
  render() {
      console.log("Profile props", this.props)
    return (
      <div>
        
        <h1>Welcome, {this.props.user.first_name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    trips: state.currentUser.trips,
    user: state.currentUser
  }
}


export default connect(null, actionCreators)(ProfileContainer)

