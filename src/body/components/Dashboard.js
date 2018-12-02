import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Ships from './Ships.js'
import ShipCreate from './ShipCreate.js'

class Dashboard extends React.Component {

  render() {

    return (
      <div>
        <h1>This is dashboard. Do Stuff, {this.props.user.email}.</h1>
        <button><Link to="/ships">View Owned Ships</Link></button>
        <button><Link to="/ships/create">Add Ship</Link></button>
        <Router>
          <Switch>
            <Route exact path="/ships" render={() => (
              <Ships user={this.props.user} />)} />
            <Route exact path="/ships/create" component={ShipCreate} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Dashboard
