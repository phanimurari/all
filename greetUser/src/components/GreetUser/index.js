import {Component} from 'react'

import './index.css'

class GreetUser extends Component {
  state = {greet: 'Hello Chris!', user: ''}

  onChangeUser = event => {
    const user = event.target.value
    this.setState({user})
  }

  onSubmitGreetForm = event => {
    event.preventDefault()

    const {user} = this.state
    this.setState({greet: `Hello ${user}!`, user: ''})
  }

  render() {
    const {greet, user} = this.state

    return (
      <div className="greet-user-container">
        <form className="greet-form" onSubmit={this.onSubmitGreetForm}>
          <h1>{greet}</h1>
          <label htmlFor="nameInput">ENTER THE NAME</label>
          <input
            type="text"
            onChange={this.onChangeUser}
            value={user}
            id="nameInput"
            placeholder="Enter the name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default GreetUser
