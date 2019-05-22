import React, { Component } from 'react'
import Trip from '../components/Trip'
import TripShow from '../components/TripShow'
// import TripForm from '../components/TripForm'
import {connect} from 'react-redux'
import {Link, Switch, Route} from 'react-router-dom'
import * as actionCreators from '../Redux/Action'



class TripContainer extends Component {

  componentDidMount(){
    this.props.getTripsCreator()
  }

  render() {
    console.log('trip props', this.props)
    return (
      <div>
        <Switch>
          <Route path="/trips/:id" render={(props) => {
            console.log("these are render props", props)
           
            //find the trip from props based on id
            const foundTrip = this.props.trips.find(trip => {
              return trip.id === parseInt(props.match.params.id)
            })

            if(foundTrip === undefined){
              props.history.push("/")
              return 
            } else {
              return ( 
                  <TripShow trip={foundTrip}/>  
              )
            }
          }} />

          <Route path="/trips" render={(props) => {
            return (
              <div>
                <h1>Trip Container</h1>
                {this.props.trips.map(trip => 
                  <Trip trip={trip}/>
                )}
              </div>
            )
          }}/>
        </Switch>
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
    trips: state.trips,
  }
}




export default connect(mapStateToProps, actionCreators)(TripContainer)
