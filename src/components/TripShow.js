import React, { Component } from 'react'

class TripShow extends Component {
  render() {
    console.log("trip show props", this.props)
    const trip = this.props.trip
    return (
      <div>
        <h1>{trip.name}</h1>
        {trip.list_items.map(item => {
          return (
            <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img src={item.img_url}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TripShow
