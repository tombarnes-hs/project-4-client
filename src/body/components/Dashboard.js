import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Button, ButtonGroup, Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap'

import Ships from './Ships.js'
import ShipCreate from './ShipCreate.js'
import ShipUpdate from './ShipUpdate.js'
import Ship from './Ship.js'

const authenticatedOptions = (
  <React.Fragment>
    <ButtonGroup>
      <Link to="/ships"><Button>View Owned Ships</Button></Link>
      <Link to="/ships/create"><Button>Add Ship</Button></Link>
    </ButtonGroup>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <p>Welcome to X-Wing Inventory manager! Sign in to view your collection</p>
  </React.Fragment>
)

const Dashboard = ({ user }) => (
  <React.Fragment>
    <div>
      { user ? authenticatedOptions : unauthenticatedOptions }
    </div>

    <Router>
      <Switch>

        <Route exact path="/ships/create" render={() => (
          <ShipCreate user={user} ship={this.state}/>)} />

        <Route exact path="/ships/:id/update" render={(props) => (
          <ShipUpdate user={user} {...props}/>)} />

        <Route exact path="/ships/:id" render={(props) => (
          <Ship user={user} {...props}/>)} />

        <Route exact path="/ships" render={(props) => (
          <Ships user={user} {...props}/>)} />
      </Switch>
    </Router>


  </React.Fragment>
)

export default Dashboard
