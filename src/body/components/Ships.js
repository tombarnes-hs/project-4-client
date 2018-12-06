import React from 'react'
import { Link, } from 'react-router-dom'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
  Container,
  Col,
  Row
} from 'reactstrap'
import axios from 'axios'

import apiUrl from '../../apiConfig'

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
    const response = await axios.get(apiUrl + '/ships', config)
    this.setState({ships: response.data.ships})
  }

  render() {

    let shipRows

    const { ships } = this.state

    if (ships.length === 0) {
      shipRows = <tr><td>You have no ships. Add one with the button above</td></tr>
    } else {
      shipRows = ships.map(ship => {
        const { id, name, pilot, notes } = ship

        return (
          <Container key={id}>


            <Card>
              <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>Favorite Pilot: {pilot}</CardSubtitle>

                <Link to={`/ships/${id}`}><Button>View More</Button></Link>
              </CardBody>
            </Card>


          </Container>

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
