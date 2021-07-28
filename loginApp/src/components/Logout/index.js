import {Component} from 'react'

class Logout extends Component {
  render() {
    const {changeState} = this.props

    return (
      <div>
        <h1>Welcome User</h1>
        <button type="button" onClick={changeState}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
