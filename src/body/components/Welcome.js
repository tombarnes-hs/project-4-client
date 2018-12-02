import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Welcome. Do stuff.</h1>
        <Link to="/ships">Ships</Link>
      </React.Fragment>
    )
  }
}

export default Welcome
