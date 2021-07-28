// Write your code here

import {Component} from 'react'

class Login extends Component {
  render() {
    const {changeState} = this.props

    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={changeState}>
          Login
        </button>
      </div>
    )
  }
}

export default Login
