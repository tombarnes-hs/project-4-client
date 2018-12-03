import React from 'react'

import axios from 'axios'

const apiUrl = 'http://localhost:4741/ships'

class Ship extends React.Component {
  constructor(props) {
    super(props)

    const { id } = this.props.match.params
    console.log({id})

    this.state = {
      ship: {}
    }
  }

  async componentDidMount() {
    const config = {
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    }
    const { id } = this.props.match.params
    const response = await axios.get(apiUrl + `/${id}`, config)
    this.setState({ship: response.data.ship})
  }


  render() {
    console.log(this.state)
    const { ship } = this.state
    const { name, pilot, notes } = ship
    return (
      <React.Fragment>
        <h1>Unit Info</h1>
        <h2>{ship ? name : 'Loading'}</h2>
        <h3>{ship ? `Favorite Pilot: ${pilot}` : ''}</h3>
        <p>{ship ? `Notes: ${notes}` : ''}</p>

      </React.Fragment>
    )
  }
}

export default Ship
