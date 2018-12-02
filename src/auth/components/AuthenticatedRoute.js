import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({
  // little component: Component is some sugar that comes with placing a Component within a Component
  component: Component,
  user,
  render,
  ...rest
}) => {
  if (user && render) {
    return <Route {...rest} render={render} />
  } else {
    return <Route {...rest} render={props =>
      user ? <Component {...props} /> : <Redirect to='/' />
    } />
  }
}

export default AuthenticatedRoute
