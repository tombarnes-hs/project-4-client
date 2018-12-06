import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import apiUrl from '../../apiConfig'

class ShipCreate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // object matches API object
      ship: {
        name: '',
        pilot: '',
        notes: ''
      },
      user: props.user,
      added: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const newShip = { ...this.state.ship, [event.target.name]: event.target.value }
    this.setState({ship: newShip})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const ship = this.state
    const config = {
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    }
    const response = await axios.post(apiUrl + '/ships', ship, config)
    this.setState({added: true})
  }

  render() {
    if (this.state.added === true) {
      return <Redirect to='/ships' />
    }
    return (
      <React.Fragment>
        <h1>Fill out form to add ship</h1>
        <Form>
          <FormGroup>
            <Label htmlFor='name'>Ship Title:</Label>
            <Input
              name='name'
              type='text'
              placeholder='X-Wing'
              required
              value={this.state.ship.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br></br>
          <br></br>
          <FormGroup>
            <Label htmlFor='pilot'>Favorite Pilot:</Label>
            <Input
              name='pilot'
              type='text'
              placeholder='Luke Skywalker'
              value={this.state.ship.pilot}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br></br>
          <br></br>
          <FormGroup>
            <Label htmlFor='notes'>Notes:</Label>
            <Input type='textarea'
              name='notes'
              // type='text'
              placeholder='Make some notes about your favorite pilot for this ship...'
              value={this.state.ship.notes}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br></br>
          <br></br>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default ShipCreate
