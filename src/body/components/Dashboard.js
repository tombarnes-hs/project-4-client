import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap'

import Ships from './Ships.js'
import ShipCreate from './ShipCreate.js'
import ShipUpdate from './ShipUpdate.js'
import Ship from './Ship.js'

const authenticatedOptions = (
  <React.Fragment>
    <button><Link to="/ships">View Owned Ships</Link></button>
    <button><Link to="/ships/create">Add Ship</Link></button>
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

    <Route exact path="/ships" render={(props) => (
      <Ships user={user} {...props}/>)} />
    <Route exact path="/ships/create" render={() => (
      <ShipCreate user={user} ship={this.state}/>)} />
    <Route exact path="/ships/:id" render={(props) => (
      <Ship user={user} {...props}/>)} />
    <Route exact path="/ships/:id/update" render={(props) => (
      <ShipUpdate user={user} {...props}/>)} />
  </React.Fragment>
)

// class Dashboard extends React.Component {

//   render() {
//     return (
//       <div>
//         <h1>Player dashboard</h1>
//
//         <button><Link to="/ships">View Owned Ships</Link></button>
//         <button><Link to="/ships/create">Add Ship</Link></button>
//
//         <Router>
//           <Switch>
//
//             <Route exact path="/ships" render={(props) => (
//               <Ships user={this.props.user} {...props}/>)} />
//
//             <Route exact path="/ships/create" render={() => (
//               <ShipCreate user={this.props.user} ship={this.state}/>)} />
//
//             <Route exact path="/ships/:id" render={(props) => (
//               <Ship user={this.props.user} {...props}/>)} />
//
//             <Route exact path="/ships/:id/update" render={(props) => (
//               <ShipUpdate user={this.props.user} {...props}/>)} />
//
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

export default Dashboard
