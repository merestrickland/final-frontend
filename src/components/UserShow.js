import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../Redux/Action'
import NavBar from '../components/NavBar'
import { Card, Icon, Image } from 'semantic-ui-react'
import Trip from '../components/Trip'



//I have access to the user id 
//filter through USERS in store, and return the match





class UserShow extends Component {



  componentDidMount(){
    this.props.getUsersCreator()

}

//  getUser = () => {
//   let userShowId = this.props.match.params.id
//   // console.log(userShowId)
//   let userList = [...this.props.users]
//   let showThisUser = userList.find(user => {
//     return user.id === parseInt(userShowId)
//    })
//    this.setState({
//     user: showThisUser
//   })
// }


// console.log(userShowId)


  
 

  
  render() {
    
    let userShowId = this.props.match.params.id

    let userList = [...this.props.users.users]
    const showThisUser = userList.find(user => {
      return user.id === parseInt(userShowId)
    })
    
    // console.log('userShowId', userShowId)
    // console.log('userList', userList)
    console.log('this user', showThisUser)
    // console.log('this user name', showThisUser.first_name)
      
      //logs in this way but as soon as I try to access any keys, it comes up undefined
      // console.log('this user tyope', showThisUser.keys())
      
    return (
      
      showThisUser ? 
      
      <div>
          <NavBar />
          <h1>{showThisUser.first_name + ' ' + showThisUser.last_name + `'s Trips`}</h1>
          <Card.Group itemsPerRow={3}>
                  {showThisUser.trips.map(trip => 
                    <Card color='teal'>
                      <Card.Header><Trip trip={trip}/></Card.Header>
                      <Card.Content>
                        <Card.Description>{trip.location} </Card.Description>
                      </Card.Content>
                    </Card>
                )}
                </Card.Group>
      </div> : null
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
    users: {
      users: state.users
    }
  }
}


export default connect(mapStateToProps, actionCreators)(UserShow)