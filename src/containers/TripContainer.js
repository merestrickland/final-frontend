import React, { Component } from 'react'
import Trip from '../components/Trip'
// import TripForm from '../components/TripForm'
import {connect} from 'react-redux'



function TripContainer(props) {
  
  console.log(props)
  props.trips.map(trip => {
    return <Trip />
  })
}


const mapStateToProps = (state) => {
  //mapState is always going to expect some sort of object
  //take the values of the object and return them to the props using the keys
  //you don't need all of state to go into TripContainer
  //just want to return some parts of state
  //the key is the prop that we are creating
  return {
    trips: state.trips
  }
}




export default connect(mapStateToProps)(TripContainer)
