import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../Redux/Action'
import { setCurrentUserTrips } from '../Redux/Action'
import NavBar from '../components/NavBar'
import { Card, Icon, Image } from 'semantic-ui-react'
import Trip from '../components/Trip'
import TripForm from '../components/TripForm'

class ProfileContainer extends Component {

  componentDidMount(){
    this.props.getTripsCreator();
    console.log("current user", this.props)
    // this.props.setCurrentUserTrips(this.props.user.trips)
    if (this.props.user.trips) {
      console.log('hello', this.props.user.trips)
      this.props.user.trips.forEach(trip => this.props.setCurrentUserTrips(trip))
    }
  }



  render() {
      console.log("Profile props", this.props)
    return (
      <div>
        <NavBar />
        <h1>Welcome, {this.props.user.first_name}</h1>
        <h3>Your Trips </h3>
        <Card.Group itemsPerRow={3}>
          {this.props.user.trips ? this.props.user.trips.map(trip => 
            
            <Card color='teal'>
                      <Card.Header><Trip trip={trip}/></Card.Header>
                      <Card.Content>
                        <Card.Description> {trip.location} </Card.Description>
                      </Card.Content>
                    </Card>
            
            
            ) : console.log('bloop')}
        </Card.Group>
        
        <h3>Add New Trip </h3>
        <TripForm />
        
      </div>
    )
  }
}

//return value will get merged into props
const mapStateToProps = (state) => {
  
  return {
    
    user: state.currentUser,
    trips: state.trips
   
  }
}


export default connect(mapStateToProps, actionCreators)(ProfileContainer)

