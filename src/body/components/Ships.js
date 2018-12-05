import React from 'react'
import { Link, } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Ships extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // empty array to hold API data
      ships: [],
      user: props.user
    }
  }

  // will contain server request
  async componentDidMount() {
    const config = {
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    }
    const response = await axios.get(apiUrl + '/ships', config)
    this.setState({ships: response.data.ships})
  }

  render() {
  
    let shipRows

    const { ships } = this.state

    if (ships.length === 0) {
      shipRows = <tr><td>Your collection is empty. Click above to add a set.</td></tr>
    } else {
      shipRows = ships.map(ship => {
        const { id, name } = ship

        return (
          <tr key={id}>
            <td>
              <Link to={`/ships/${id}`}>{name}</Link>
            </td>
          </tr>
        )
      })
    }

    return (
      <React.Fragment>
        <br></br>
        <h1>Ships You Own</h1>
        <table>
          <tbody>
            {shipRows}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Ships
