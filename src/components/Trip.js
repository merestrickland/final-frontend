import React, { Component } from 'react'

class Trip extends Component {

    componentWillMount() {
        fetch('http://localhost:3005/')
        .then(response => response.json())
        .then(data => console.log(data))
    }



  render() {
    return (
      <div>
        <h1>Trip</h1>
      </div>
    )
  }
}

export default Trip;
