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
    //sets trip to current Trip in Store
    const trip = this.props.trip
    // console.log('this is trip', trip)
    const thingsToDo = trip.list_items.filter(item => item.category === 'activity')
    const thingsToEat = trip.list_items.filter(item => item.category === 'eating')
    const thingsToDrink = trip.list_items.filter(item => item.category === 'drinking')
    

    return (
      <div>
        <h1 class="center">{trip.name}</h1>
        <h3 class="triplocation">{trip.location}</h3>

        <h4>Things To Do</h4>
        {thingsToDo.map(item => {
          return (
          
            
            <Modal trigger={<Button>{item.name}</Button>}>
              <Modal.Header>{item.name}</Modal.Header>
              <Modal.Content image>
              <Image wrapped size='medium' src={item.img_url} />
              <Modal.Description>
                  <Header>{item.description}</Header>
              </Modal.Description>
              
              </Modal.Content>
              <Icon link name='trash alternate outline' onClick={() => {this.handleClick(item)}} />
            </Modal>
          )
        })}

        <h4>Things To Eat</h4>
        {thingsToEat.map(item => {
          return (
          
            
            <Modal trigger={<Button>{item.name}</Button>}>
              <Modal.Header>{item.name}</Modal.Header>
              <Modal.Content image>
              <Image wrapped size='medium' src={item.img_url} />
              <Modal.Description>
                  <Header>{item.description}</Header>
                 
              </Modal.Description>
              
              </Modal.Content>
              <Icon link name='trash alternate outline' onClick={() => {this.handleClick(item)}} />
            </Modal>
          )
        })}

        <h4>Things To Drink</h4>
        {thingsToDrink.map(item => {
          return (
          
            
            <Modal trigger={<Button>{item.name}</Button>}>
              <Modal.Header>{item.name}</Modal.Header>
              <Modal.Content image>
              <Image wrapped size='medium' src={item.img_url} />
              <Modal.Description>
                  <Header>{item.description}</Header>
              </Modal.Description>
              
              </Modal.Content>
              <Icon link name='trash alternate outline' onClick={() => {this.handleClick(item)}} />
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
