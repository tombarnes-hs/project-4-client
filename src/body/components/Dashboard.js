import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Ships from './Ships.js'
import ShipCreate from './ShipCreate.js'
import ShipUpdate from './ShipUpdate.js'
import Ship from './Ship.js'

class Dashboard extends React.Component {

  render() {

    return (
      <div>
        <h1>This is dashboard. Do Stuff, {this.props.user.email}.</h1>
        <button><Link to="/ships">View Owned Ships</Link></button>
        <button><Link to="/ships/create">Add Ship</Link></button>
        <Router>
          <Switch>
            <Route exact path="/ships/create" render={() => (
              <ShipCreate user={this.props.user} ship={this.state}/>)} />
            <Route exact path="/ships/update" render={(props) => (
              <ShipUpdate user={this.props.user} {...props}/>)} />
            <Route exact path="/ships/:id" render={(props) => (
              <Ship user={this.props.user} {...props}/>)} />
            <Route exact path="/ships" render={(props) => (
              <Ships user={this.props.user} {...props}/>)} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Dashboard
