 import React, { Component } from 'react'
 import {connect} from 'react-redux'
 import { postTripRequest } from '../Redux/Action'
 import { Field, reduxForm } from "redux-form";
import { Input } from "semantic-ui-react";
 
 class TripForm extends Component {

    state = {
        name: '',
        list_items: [],
        location: '',
        // user: this.props.user
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log('submitted!')
        let newTripObject = {...this.state, user_id: this.props.user.id}
        this.props.postTripRequest(newTripObject)
        this.setState({
          name: '',
          location: ''
        })
    }

   


   render() {
    //    console.log(this.state)
      //  console.log('props', this.props)
     return (
        
        <form onSubmit={this.handleSubmit}>
            
            <Input type="text" name="name" placeholder="Trip Name" value={this.state.name} onChange={this.handleChange}/>
            <Input type="text" name="location" placeholder="Trip Location" value={this.state.location} onChange={this.handleChange}/>
            <Input type="submit" />

        </form>
     )
   }
 }

 const mapStateToProps = (state) => {
  
    return {
      user: state.currentUser
    }
  }


 export default connect(mapStateToProps, { postTripRequest })(TripForm);
 