import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class ShipUpdate extends React.Component {
  constructor(props) {
    super(props)
    // props.location.state.ship.ship is the imported state from the Link to this component. Can be refactored
    const name = props.location.state.ship.ship.name
    const id = props.location.state.ship.ship.id
    const pilot = props.location.state.ship.ship.pilot
    // name and id will not change with user input. This will retain values
    this.state = {
      ship: {
        id: id,
        name: name,
        pilot: pilot,
        notes: ''
      },
      updated: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const updatedShip = Object.assign(this.state.ship)
    const userInput = event.target.value
    const inputName = event.target.name
    updatedShip[inputName] = userInput
    this.setState({ ship: updatedShip })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const shipParams = {ship: this.state.ship}
    const id = this.state.ship.id
    const token = this.props.user.token
    const config = {
      headers: {
        'Authorization': `Token token=${token}`
      }
    }
    const response = await axios.patch(apiUrl + `/ships/${id}`, shipParams, config)
    this.setState({updated: true})
  }


  render() {
    if (this.state.updated === true) {
      return <Redirect to='/ships' />
    }

    const { ship } = this.props.location.state.ship
    const { name, pilot, notes } = ship

    return (
      <React.Fragment>
        <h1>Update your Favorite Pilot or Notes for { name }</h1>
        <form>
          <label htmlFor='pilot'>
            Favorite Pilot:
            <input
              name='pilot'
              type='text'
              value={this.state.ship.pilot}
              placeholder={ pilot }
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <label htmlFor='notes'>
            Notes:
            <textarea
              name='notes'
              type='text'
              value={this.state.ship.notes}
              placeholder={ notes }
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>

      </React.Fragment>
    )
  }
}

export default ShipUpdate
