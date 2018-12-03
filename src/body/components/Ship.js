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
    this.setState({movie: response.data.ship})
  }


  render() {
    console.log(this.state)
    return (
      <h1>Ship Info</h1>
    )
  }
}

export default Ship
