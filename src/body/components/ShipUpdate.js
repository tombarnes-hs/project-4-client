import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:4741/ships'

class ShipUpdate extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     // object matches API object
  //     ship: {
  //       name: '',
  //       pilot: '',
  //       notes: ''
  //     },
  //     added: false
  //   }
  //
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleChange(event) {
  //   const newShip = { ...this.state.ship, [event.target.name]: event.target.value }
  //   this.setState({ship: newShip})
  // }

  // async handleSubmit(event) {
  //   event.preventDefault()
  //   const ship = this.state
  //   const config = {
  //     headers: {
  //       'Authorization': `Token token=${this.props.user.token}`
  //     }
  //   }
  //   const response = await axios.post(apiUrl, ship, config)
  //   this.setState({added: true})
  // }

  render() {
    return (
      <h1>Update Form Here</h1>
    )
  }
}

export default ShipUpdate
