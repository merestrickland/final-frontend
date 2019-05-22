import React, { Component } from 'react'

export default class ProfileContainer extends Component {
  render() {
      console.log("Profile props", this.props)
    return (
      <div>
        <h1>Profile Container</h1>
      </div>
    )
  }
}
