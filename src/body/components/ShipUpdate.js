import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:4741/ships'

class ShipUpdate extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.location.state)
    console.log(this.props)
  }

  render() {
    return (
      <h1>Update Ship Info</h1>
    )
  }
}

export default ShipUpdate
