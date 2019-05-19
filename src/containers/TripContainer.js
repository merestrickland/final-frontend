import React, { Component } from 'react'
import Trip from '../components/Trip'
// import TripForm from '../components/TripForm'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'



function TripContainer(props) {
  console.log(props)
  return(
    <div>
  <Switch>
    <Route path="/trips" render={(props) => {
      console.log(props)
        let eachTrip = props.trips.map(trip => {
          return <Trip trip={trip}/>
        })
        return eachTrip
    }}/>
  </Switch>
  </div>
  )
  
  
}


const mapStateToProps = (state) => {
  //mapState is always going to expect some sort of object
  //take the values of the object and return them to the props using the keys
  //you don't need all of state to go into TripContainer
  //just want to return some parts of state
  //the key is the prop that we are creating
  return {
    trips: state.trips,
  }
}




export default connect(mapStateToProps)(TripContainer)
