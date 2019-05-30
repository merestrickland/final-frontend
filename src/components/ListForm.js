import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from "redux-form";
import { Input, TextArea, Form, Button, Modal, Dropdown } from "semantic-ui-react";
import {postListItemRequest} from '../Redux/Action'

class ListForm extends Component {

    
   state = {
       name: '',
       description: '',
       img_url: '',
      //  category: '',
       open: false
    }




    handleRef = component => (this.ref = component);
    open = () => this.setState({ open: true }, () => this.ref.focus());
    close = () => this.setState({ open: false });
    

  //  handleChange = (event) => {
  //    console.log('listForm props', this.props)
  //      this.setState({
  //          [event.target.name]: event.target.value,
      
  //      })
  //  }

  handleChange = (e, { name, value }) => 
    this.setState({ [name]:   value })

   handleSubmit = (event) => {
       event.preventDefault()
      
       this.setState({
        name: '',
        description: '',
        img_url: '',
        category: '',
        open: false
       })
       let newListItem = {...this.state, user_id: this.props.user.id, trip_id: this.props.trip.id}

       console.log('new list item', newListItem)
       
       this.props.postListItemRequest(newListItem)

   }


   
  
  


  render() {
 
      // console.log('props', this.props)


      let categoryOptions = [
        {
          key: 'activity',
          text: 'activity',
          value: 'activity',
          name: 'activity'
        },
        {
         key: 'eating',
         text: 'eating',
         value: 'eating',
         name: 'eating'
       },
       {
        key: 'drinking',
        text: 'drinking',
        value: 'drinking',
        name: 'drinking'
      }]


    return (

        <div>
              <Button primary content='Add Trip Item' onClick={this.open} />
              <Modal open={this.state.open} onClose={this.close}>
                <Modal.Content>
                 
                  <Form onSubmit={this.handleSubmit}>
           
                    <Input ref={this.handleRef} type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>

                    <TextArea type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange}/>

                    <TextArea type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} onChange={this.handleChange}/>

                    <Dropdown
                    placeholder='Select Category'
                    fluid
                    selection
                    options={categoryOptions}
                    name="category"
                    onChange={this.handleChange}/>
                    
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

export default connect(mapStateToProps, { postListItemRequest })(ListForm);
