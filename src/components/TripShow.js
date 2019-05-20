import React, { Component } from 'react'

class TripShow extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.trip.name}</h1>
      </div>
    )
  }
}

export default TripShow
