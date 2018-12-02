import React from 'react'

class Hello extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello {this.props.user.email}</h1>
        <p>Dashboard with buttons should be here</p>
      </div>
    )
  }
}

export default Hello
