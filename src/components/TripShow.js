import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import ListForm from './ListForm'
import { setTrip } from '../Redux/Action'
import {connect} from 'react-redux'
import * as actionCreators from '../Redux/Action'
import {removeListItemRequest} from '../Redux/Action'

class TripShow extends Component {

  // componentDidMount(){
    // this.props.setTrip(this.props.trip);
  // }

  handleClick = (item) => {
    console.log('handle click props', this.props)
    console.log('thing to remove', item)

    //send in item.id
    this.props.removeListItemRequest(item)
    this.props.removeListItem(item)
    // this.props.removeTrip(this.props.trip.id)
    // this.props.removeTripRequest(this.props.trip.id)
  }


  render() {
    // console.log("trip show props", this.props)
    // this.props.setTrip(this.props.passedTrip)
    const trip = this.props.trip
    // console.log('this is trip', trip)
    
    //set trip to current Trip in Store

    return (
      <div>
        <h1>{trip.name}</h1>
        <h3>{trip.location}</h3>
        {trip.list_items.map(item => {
          return (
            // <div>
            // <h3>{item.name}</h3>
            // <p>{item.description}</p>
            // <img alt={item.name} src={item.img_url}/>
            // </div>
            
            
            
            <Modal trigger={<Button>{item.name}</Button>}>
              <Modal.Header>{item.name}</Modal.Header>
              <Modal.Content image>
              <Image wrapped size='medium' src={item.img_url} />
              <Modal.Description>
                  <Header>{item.description}</Header>
                  <h3>{item.category}</h3>
              </Modal.Description>
              <Button onClick={() => {this.handleClick(item)}}><Icon link name='trash alternate outline' /></Button>
              </Modal.Content>
            </Modal>
            
          )
        })}
        <div>
        <ListForm trip={trip}/>
        </div>
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
    trip: state.selectedTrip,
  }
}
// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

export default connect(mapStateToProps, actionCreators)(TripShow)
