import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:4741/ships'

class Ship extends React.Component {
  constructor(props) {
    super(props)

    const { id } = this.props.match.params
    console.log({id})

    this.state = {
      ship: {},
      delete: false
    }
    this.deleteShip = this.deleteShip.bind(this)
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

  async deleteShip() {
    const config = {
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    }
    const id = this.props.match.params.id
    const response = await axios.delete(apiUrl + `/${id}`, config)
    this.setState({deleted: true})
  }


  render() {
    if (this.state.deleted === true) {
      return <Redirect to='/ships' />
    }
    const { ship } = this.state
    const { name, pilot, notes } = ship
    return (
      <React.Fragment>
        <h1>Unit Info</h1>
        <h3>{ship ? name : 'Loading'}</h3>
        <hr></hr>
        <br></br>

        <h4>{ship ? `Favorite Pilot: ${pilot}` : ''}</h4>
        <p>{ship ? `Notes: ${notes}` : ''}</p>
        <button onClick={this.deleteShip}>Remove from Collection</button>
        <button><Link to="/ships/update">Update Info</Link></button>
      </React.Fragment>
    )
  }
}

export default Ship
