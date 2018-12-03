import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:4741/ships'

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
        'Authorization': `Token token=${this.props.user.token}`
      }
    }
    const response = await axios.post(apiUrl, ship, config)
    this.setState({added: true})
  }

  render() {
    if (this.state.added === true) {
      return <Redirect to='/ships' />
    }
    return (
      <React.Fragment>
        <h1>Fill out form to add ship</h1>
        <form>
          <label htmlFor='name'>
            Ship Title:
            <input
              name='name'
              type='text'
              placeholder='X-Wing'
              required
              value={this.state.ship.name}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <label htmlFor='pilot'>
            Favorite Pilot:
            <input
              name='pilot'
              type='text'
              placeholder='Luke Skywalker'
              value={this.state.ship.pilot}
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
              placeholder='Make some notes about your favorite pilot for this ship...'
              value={this.state.ship.notes}
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

export default ShipCreate
