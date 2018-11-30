import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, signUp, signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    // `name` and `value` are html properties equal to keys in state
    // handleChange resets state
    [event.target.name]: event.target.value
  })

  signUp = event => {
    // handles page reset
    event.preventDefault()

    // destructuring of state. Variables from state to be used below
    const { email, password, passwordConfirmation} = this.state
    // props passed down from App
    const { flash, history, setUser } = this.props

    // NOT a recursive function. This function might as well be ApiSignUp
    signUp(this.state)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render () {
    const { email, password, passwordConfirmation} = this.state

    return (
      <form className='auth-form' onSubmit={this.signUp}>
        <h3>Sign Up</h3>

        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUp)
