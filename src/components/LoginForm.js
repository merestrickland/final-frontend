import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchLogin} from '../Redux/Action'
import {withRouter} from 'react-router-dom'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';



class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleSubmit = (event) => {
        // console.log("handle submit props", this.props)
        // console.log("handle submit state", this.state)
        event.preventDefault()
        this.props.fetchLogin(this.state)
        this.props.history.push('/profile')
    }



  render() {
    
    return (

       
            // <Grid centered columns={2}>
            //   <Grid.Column>
            //     <Header as="h2" textAlign="center">
            //       Login
            //     </Header>
            //     <Segment>
            //       <Form size="large">
            //         <Form.Input
            //           fluid
            //           icon="user"
            //           iconPosition="left"
            //           placeholder="Email address"
            //         />
            //         <Form.Input
            //           fluid
            //           icon="lock"
            //           iconPosition="left"
            //           placeholder="Password"
            //           type="password"
            //         />
          
            //         <Button color="blue" fluid size="large">
            //           Login
            //         </Button>
            //       </Form>
            //     </Segment>
            //     <Message>
            //       Not registered yet? <a href="#">Sign Up</a>
            //     </Message>
            //   </Grid.Column>
            // </Grid>
          
      <div>
          <h3>Log In</h3>
          
          <form onSubmit={this.handleSubmit}>
            <label>
                Email Address:
                <input type="text" name="email" placeholder="email" value={this.state.email}  onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
                Password:
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            </label>
            <br/>

            <input type="submit"/>
            
          </form>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//     return {user: state.currentUser}
// }

const mapDispatchToProps = dispatch => {
    return {
        fetchLogin: userInfo => dispatch(fetchLogin(userInfo))
    }
}


export default connect(null, mapDispatchToProps)(withRouter(LoginForm))
