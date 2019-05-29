import React, { Component } from 'react'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'
import ListForm from './ListForm'

class TripShow extends Component {
  render() {
    console.log("trip show props", this.props)
    const trip = this.props.trip
    return (
      <div>
        <h1>{trip.name}</h1>
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
              </Modal.Description>
              </Modal.Content>
            </Modal>

            

            
            
          )
        })}
        <div>
        <ListForm />
        </div>
      </div>
    )
  }
}

export default TripShow
