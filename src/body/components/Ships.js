import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'http://localhost:4741/ships'

class Ships extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // empty array to hold API data
      ships: []
    }
  }

  // will contain server request
  async componentDidMount() {
    const config = {
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    }
    console.log(config)
    const response = await axios.get(apiUrl, config)
    this.setState({ships: response.data.ships})
  }

  render() {
    console.log(this.state)
    let shipRows

    const { ships } = this.state

    if (ships.length === 0) {
      shipRows = <tr><td>Loading</td></tr>
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
