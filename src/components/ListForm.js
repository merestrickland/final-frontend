import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setCurrentUserTrips } from '../Redux/Action'
import { Field, reduxForm } from "redux-form";
import { Input, TextArea, Form, Button, Modal } from "semantic-ui-react";

class TripForm extends Component {

    
   state = {
       name: '',
       description: '',
       img_url: '',
       category: '',
       trip_id: null,
       user_id: null,
       open: false
    }


 
      
      
        handleRef = component => (this.ref = component);
        open = () => this.setState({ open: true }, () => this.ref.focus());
        close = () => this.setState({ open: false });
      
       
    
      
      // ----------------------------------------
      // Render to DOM
      // ----------------------------------------
    //   const mountNode = document.createElement('div')
    //   document.body.appendChild(mountNode)
      
    //   ReactDOM.render(<App />, mountNode)


   handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value,
        //    user_id: this.props.user.id,
        //    trip_id: this.props.trip.id
       })
   }

   handleSubmit = (event) => {
       event.preventDefault()
       // console.log('submitted!')
       let newTripObject = this.state
       this.props.setCurrentUserTrips(newTripObject)
   }

  


  render() {
   //    console.log(this.state)
      console.log('props', this.props)
    return (

        <div>
              <Button primary content='Add Trip Item' onClick={this.open} />
              <Modal open={this.state.open} onClose={this.close}>
                <Modal.Content>
                 
                  <Form onSubmit={this.handleSubmit}>
           
                    <Input ref={this.handleRef} type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <TextArea type="text" name="description" placeholder="description" value={this.state.location} onChange={this.handleChange}/>
                    <Input type="submit" />

                </Form>
                </Modal.Content>
              </Modal>
        </div>
       
       
    )
  }
}

const mapStateToProps = (state) => {
 
   return {
     user: state.currentUser
   }
 }



//return value will get merged into props
//  const mapDispatchToProps = (dispatch) => {
//     return {
//         addTrip: (newTripObject) => {dispatch( {type: "ADD_TRIP", payload: newTripObject} )}
//     }
//  }

export default connect(mapStateToProps, { setCurrentUserTrips })(TripForm);
