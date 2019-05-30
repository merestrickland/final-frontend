import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { removeTripRequest, removeTrip } from '../Redux/Action'
import {setCurrentUserTrips} from '../Redux/Action'


class Trip extends Component {
  
  

  handleClick = () => {
    console.log('handle click props', this.props.trip.id)
    this.props.removeTrip(this.props.trip.id)
    this.props.removeTripRequest(this.props.trip.id)
  }



  render(){
    console.log('TripCard props', this.props)
  
    let trip = this.props.trip
    // console.log('trip', trip)
    return (
       
        <div>
          {/* {this.props.currentUser.id === this.props.tripUserId ? <Icon link name='close' color='red' onClick={this.handleClick}/> : null} */}
          <Icon link name='close' color='red' onClick={this.handleClick}/>
          <Link to={`/trips/${trip.id}`}>
            <h1 class='trip card'>{trip.name}</h1>
          </Link>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.users)
  return {
    currentUser: state.currentUser,
    

  }
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeTrip: (id) => {dispatch({type: 'REMOVE_TRIP', payload: id})}
//   }
// }


export default connect(mapStateToProps, {removeTripRequest, removeTrip})(Trip)

