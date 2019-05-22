import React, { Component } from 'react'

export default class UserShow extends Component {
  render() {
      console.log('user show props', this.props)
    return (
      <div>
          <h1>User Show</h1>
      </div>
    )
  }
}
