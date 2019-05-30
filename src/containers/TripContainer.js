import React, { Component } from 'react'
import Trip from '../components/Trip'
import TripShow from '../components/TripShow'
// import TripForm from '../components/TripForm'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import * as actionCreators from '../Redux/Action'
import { Card, Icon, Image } from 'semantic-ui-react'
import NavBar from '../components/NavBar'
import { setTrip } from '../Redux/Action'



class TripContainer extends Component {

  componentDidMount(){
    this.props.getTripsCreator()
  }

  render() {
    console.log('trip props', this.props)
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/trips/:id" render={(props) => {
            
           
            //find the trip from props based on id
            const foundTrip = this.props.trips.find(trip => {
              return trip.id === parseInt(props.match.params.id)
            })

            if(foundTrip === undefined){
              props.history.push("/")
              return 
            } else {
              //setting selected trip here
              this.props.setTrip(foundTrip)

              return ( 
                  <TripShow passedTrip={foundTrip}/>  
              )
            }
          }} />

          <Route path="/trips" render={(props) => {
            return (
              <div>
                <h1>Trip Container</h1>
                <Card.Group itemsPerRow={3}>
                  {this.props.trips.map(trip => 
                    <Card color='teal'>
                      <Card.Header><Trip trip={trip}/></Card.Header>
                      <Card.Content>
                        <Card.Description> {trip.location.name} </Card.Description>
                      </Card.Content>
                    </Card>
                )}
                </Card.Group>
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
