import React, { Component } from 'react'

export default class Blogs extends Component {
    state = {
        message: 'hello'
    }

    handleClick = () => {
        setState({ message : 'Welcome' })
    }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={handleClick}>Click to change message</button>
      </>
    )
  }
}
