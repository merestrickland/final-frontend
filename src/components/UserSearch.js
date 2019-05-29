import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Switch, Route} from 'react-router-dom'
import * as actionCreators from '../Redux/Action'
import NavBar from '../components/NavBar'

class UserSearch extends Component {

    componentDidMount(){
        this.props.getUsersCreator()
    }


    handleChange = (event) => {
      let userSearch = event.target.value.toLowerCase()
      // console.log(userSearch)
      
      let userList = [...this.props.users]
      
      let newArr = userList.filter(user => {
         return user.first_name.toLowerCase().includes(userSearch)
      })
      console.log(newArr)
      this.props.filterUsers(newArr)
    }

  render() {

    

    console.log('user search props', this.props)
      return (
        
        <div>
          <NavBar />
          <input onChange={this.handleChange} style={{ width: 500, height: 35,     borderRadius: '100px'}} type="text"
            placeholder={"Search for a User"}/>
        {this.props.filteredUsers.map(user => {
          return (
            <div>
              <Switch>
              {/* <Route path */}
              <Route path="/users" render={(props) => {
                  console.log('render props', props)
                   return (
                    <Link to={`/users/${user.id}`}>
                    <h2>{user.first_name}</h2>

                    </Link>
                   )     
              }}/>
              </Switch>
            </div>
          )
        })}
        
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
      filteredUsers: state.filteredUsers,
      users: state.users
    }
  }




export default connect(mapStateToProps, actionCreators)(UserSearch)
