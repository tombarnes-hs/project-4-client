import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Ships from './Ships.js'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>This is dashboard. Do Stuff.</h1>
        <Link to="/ships">Ships</Link>
        <Router>
          <Switch>
            <Route exact path="/ships" component={Ships} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Dashboard
