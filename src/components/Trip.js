import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { removeTrip } from '../Redux/Action'
import {setCurrentUserTrips} from '../Redux/Action'


class Trip extends Component {
  
  

  handleClick = () => {
    console.log('handle click props', this.props.trip.id)
    this.props.removeTrip(this.props.trip.id)
  }



  render(){
    
  
    let trip = this.props.trip

    return (
       
        <div>
          <Icon link name='close' color='red' onClick={this.handleClick}/>
          <Link to={`/trips/${trip.id}`}>
            <h1>{trip.name}</h1>
          </Link>
        </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   // console.log(state.users)
//   return {
//     users: state.users,
//     trips: state.trips

//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeTrip: (id) => {dispatch({type: 'REMOVE_TRIP', payload: id})}
//   }
// }


export default connect(null, {removeTrip})(Trip)

